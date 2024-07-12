import { AiOutlineSearch } from "react-icons/ai";
import styles from "./styles.module.css";

interface SearchInputProps {
   searchTerm: string;
   setSearchTerm: (term: string) => void;
}

export function SearchInput({ searchTerm, setSearchTerm }: SearchInputProps) {
   return (
      <div className={styles.searchInputContainer}>
         <input
            type="text"
            placeholder="Pesquisar produto"
            className={styles.searchInput}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
         />
         <AiOutlineSearch size={19} className={styles.searchIcon} />
      </div>
   );
}
