import React, { useState, useEffect } from "react";
import styles from "./styles.module.css";
import { IoIosCloseCircle } from "react-icons/io";

interface ModalProps {
   isOpen: boolean;
   onClose: () => void;
   children: React.ReactNode;
}

export function Modal({ isOpen, onClose, children }: ModalProps) {
   const [visible, setVisible] = useState(isOpen);

   useEffect(() => {
      if (isOpen) {
         setVisible(true);
      } else {
         const timer = setTimeout(() => {
            setVisible(false);
         }, 500);
         return () => clearTimeout(timer);
      }
   }, [isOpen]);

   return (
      visible && (
         <div
            className={`${styles.overlay} ${
               !isOpen ? styles.overlayHidden : ""
            }`}
         >
            <div
               className={`${styles.modal} ${
                  !isOpen ? styles.modalHidden : ""
               }`}
            >
               {children}
            </div>
            <button className={styles.closeButton} onClick={onClose}>
               <IoIosCloseCircle size={30} color="white" />
            </button>
         </div>
      )
   );
}
