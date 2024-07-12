import { useContext, useState } from "react";
import { SearchInput } from "../../components/inputSearch";
import { Modal } from "../../components/modal";
import { ProductForm } from "../../components/productForm";
import { ProductRow } from "../../components/productRow";
import styles from "./styles.module.css";
import { ProductContext } from "../../contexts/ProductContext";
import { LoadingSpinner } from "../../components/loadingSpinner";

export function Home() {
   const { products, loading } = useContext(ProductContext);
   const [isModalOpen, setIsModalOpen] = useState(false);
   const [searchTerm, setSearchTerm] = useState("");

   const filteredProducts = products.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
   );

   return (
      <section className={styles.sectionContainer}>
         <div className={styles.divSearch}>
            <button
               onClick={() => setIsModalOpen(true)}
               className={styles.button}
            >
               Cadastrar Produtos
            </button>
            <SearchInput
               searchTerm={searchTerm}
               setSearchTerm={setSearchTerm}
            />
         </div>
         {loading ? (
            <div className={styles.sectionContainer}>
               <LoadingSpinner />
            </div>
         ) : (
            <table className={styles.table}>
               <thead>
                  <tr>
                     <th className={styles.th}>Nome</th>
                     <th className={styles.th}>Descrição</th>
                     <th className={styles.th}>Preço</th>
                     <th className={`${styles.th} ${styles.textCenter}`}>
                        Opções
                     </th>
                  </tr>
               </thead>
               <tbody>
                  {filteredProducts.map((product) => (
                     <ProductRow
                        key={product.id}
                        id={product.id}
                        name={product.name}
                        description={product.description}
                        price={product.price}
                     />
                  ))}
               </tbody>
               <tfoot>
                  <tr className={styles.tableFooter}>
                     <td className={styles.tableFooterCell} colSpan={4}></td>
                  </tr>
               </tfoot>
            </table>
         )}

         <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
            <ProductForm onCancel={() => setIsModalOpen(false)} />
         </Modal>
      </section>
   );
}
