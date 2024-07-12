import { createContext, useState, useEffect, ReactNode } from "react";
import api from "../services/api/api";

interface Product {
   id: number;
   name: string;
   description: string;
   price: string;
   createdAt: string;
   updatedAt: string;
}

interface ProductContextProps {
   products: Product[];
   loading: boolean;
}

export const ProductContext = createContext({} as ProductContextProps);

interface ProductProviderProps {
   children: ReactNode;
}

function ProductProvider({ children }: ProductProviderProps) {
   const [products, setProducts] = useState<Product[]>([]);
   const [loading, setLoading] = useState<boolean>(true);

   useEffect(() => {
      async function fetchProducts() {
         setLoading(true);
         try {
            const response = await api.get<Product[]>(
               `${import.meta.env.VITE_API_URL}/products`
            );
            setProducts(response.data);
            // console.log(response.data);
         } catch (error) {
            console.error("Erro ao buscar produtos:", error);
         } finally {
            setLoading(false);
         }
      }

      fetchProducts();
   }, []);

   return (
      <ProductContext.Provider value={{ products, loading }}>
         {children}
      </ProductContext.Provider>
   );
}

export default ProductProvider;
