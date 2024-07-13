import { useState } from "react";
import { BiSolidEdit } from "react-icons/bi";
import { FaTrashAlt } from "react-icons/fa";
import styles from "./styles.module.css";
import api from "../../services/api/api";
import { useNavigate } from "react-router-dom";
import { formatDate } from "../../utils/dateUtils";
import { formatPrice } from "../../utils/currencyUtils";
import { ProductFormEdit } from "../productFormEdit";
import { Modal } from "../modal";
import { toast } from "react-toastify";

interface ProductRowProps {
   id: number;
   name: string;
   description: string;
   price: string;
   createdAt: string;
}

export function ProductRow({
   id,
   name,
   description,
   price,
   createdAt,
}: ProductRowProps) {
   const navigate = useNavigate();
   const [isModalOpen, setIsModalOpen] = useState(false);

   async function handleDeleteProduct(id: number) {
      try {
         await api.delete(`/products/${id}`);
         toast.success("Produto deletado com sucesso!", { autoClose: 1500 });
         setTimeout(() => {
            navigate(0);
         }, 1500);
      } catch (error) {
         console.error(error);
         toast.error("Erro ao deletar o produto!", { autoClose: 1500 });
      }
   }

   const formattedDate = formatDate(createdAt);
   const formattedPrice = formatPrice(price);

   return (
      <>
         <tr className={styles.tableRow}>
            <td className={styles.tableCell}>{name}</td>
            <td className={`${styles.tableCell} ${styles.descriptionCell}`}>
               {description}
            </td>
            <td className={styles.tableCell}>{formattedPrice}</td>
            <td className={`${styles.tableCell} ${styles.createdCell}`}>
               {formattedDate}
            </td>
            <td className={styles.actionButtons}>
               <button
                  className={`${styles.actionButton} ${styles.blue}`}
                  onClick={() => setIsModalOpen(true)}
               >
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
         <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
            <ProductFormEdit
               onCancel={() => setIsModalOpen(false)}
               productId={id}
               initialData={{ name, description, price }}
            />
         </Modal>
      </>
   );
}
