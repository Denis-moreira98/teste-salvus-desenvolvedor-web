import { FaSpinner } from "react-icons/fa";
import styles from "./styles.module.css";

export function LoadingSpinner() {
   return (
      <div className={styles.spinner}>
         <FaSpinner className={styles.icon} />
      </div>
   );
}
