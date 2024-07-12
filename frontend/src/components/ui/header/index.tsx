import logo from "../../../assets/Logo-SALVUS.webp";
import styles from "./styles.module.css";

export function Header() {
   return (
      <header className={styles.header}>
         <img src={logo} alt="Logo Salvus" />
      </header>
   );
}
