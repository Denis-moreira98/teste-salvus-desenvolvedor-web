import { BiSolidEdit } from "react-icons/bi";
import { FaTrashAlt } from "react-icons/fa";
import styles from "./styles.module.css";
import api from "../../services/api/api";

interface ProductRowProps {
   id: number;
   name: string;
   description: string;
   price: string;
}

export function ProductRow({ id, name, description, price }: ProductRowProps) {
   async function handleDeleteProduct(id: number) {
      try {
         await api.delete(`/products/${id}`);
      } catch (error) {
         console.log(error);
      }
   }

   return (
      <tr className={styles.tableRow}>
         <td className={styles.tableCell}>{name}</td>
         <td className={styles.tableCell}>{description}</td>
         <td className={styles.tableCell}>R$ {price}</td>
         <td className={styles.actionButtons}>
            <button className={`${styles.actionButton} ${styles.blue}`}>
               <BiSolidEdit size={18} color="#ffffff" />
            </button>
            <button
               onClick={() => handleDeleteProduct(id)}
               className={`${styles.actionButton} ${styles.red}`}
            >
               <FaTrashAlt size={18} color="#ffffff" />
            </button>
         </td>
      </tr>
   );
}
