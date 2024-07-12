import React from "react";
import styles from "./styles.module.css";

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
      <button className={styles.submitButton} {...props} disabled={isLoading}>
         {isLoading ? "Cadastrando..." : children}
      </button>
   );
}
