import { useContext } from "react";
import { ProductRow } from "../../components/productRow";
import styles from "./styles.module.css";
import { ProductContext } from "../../contexts/ProductContext";

export function Home() {
   const { products, loading } = useContext(ProductContext);

   return (
      <section className={styles.sectionContainer}>
         <div className={styles.divSearch}>
            <button className={styles.button}>Adicionar Produtos</button>
         </div>
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
               {loading ? (
                  <tr>
                     <td colSpan={4}>Carregando...</td>
                  </tr>
               ) : (
                  products.map((product) => (
                     <ProductRow
                        key={product.id}
                        id={product.id}
                        name={product.name}
                        description={product.description}
                        price={product.price}
                     />
                  ))
               )}
            </tbody>
            <tfoot>
               <tr className={styles.tableFooter}>
                  <td className={styles.tableFooterCell} colSpan={4}></td>
               </tr>
            </tfoot>
         </table>
      </section>
   );
}
