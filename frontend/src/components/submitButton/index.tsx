import React from "react";
import styles from "./styles.module.css";
import { FaSpinner } from "react-icons/fa";

interface SubmitButtonProps
   extends React.ButtonHTMLAttributes<HTMLButtonElement> {
   isLoading: boolean;
}

export function SubmitButton({
   isLoading,
   children,
   ...props
}: SubmitButtonProps) {
   return (
      <button
         className={`${styles.submitButton} ${isLoading ? styles.loading : ""}`}
         {...props}
         disabled={isLoading}
      >
         {isLoading ? <FaSpinner className={styles.spinner} /> : children}
      </button>
   );
}
