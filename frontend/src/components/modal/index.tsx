import styles from "./styles.module.css";

interface ModalProps {
   isOpen: boolean;
   onClose: () => void;
   children: React.ReactNode;
}

export function Modal({ isOpen, onClose, children }: ModalProps) {
   if (!isOpen) return null;

   return (
      <div className={styles.overlay}>
         <div className={styles.modal}>
            <button className={styles.closeButton} onClick={onClose}>
               X
            </button>
            {children}
         </div>
      </div>
   );
}
