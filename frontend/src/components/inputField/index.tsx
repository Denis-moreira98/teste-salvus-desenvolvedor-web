import React from "react";
import styles from "./styles.module.css";

interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
   label: string;
   error?: string;
   placeholder?: string;
}

export const InputField = React.forwardRef<HTMLInputElement, InputFieldProps>(
   function InputField({ label, error, placeholder, ...props }, ref) {
      return (
         <div className={styles.inputField}>
            <label>{label}</label>
            <input {...props} ref={ref} placeholder={placeholder} />
            {error && <span className={styles.error}>{error}</span>}
         </div>
      );
   }
);
