import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { InputField } from "../inputField";
import { SubmitButton } from "../submitButton";
import styles from "./styles.module.css";
import api from "../../services/api/api";
import { useNavigate } from "react-router-dom";

const productSchema = z.object({
   name: z.string().min(1, "Nome é obrigatório."),
   description: z.string().min(1, "Descrição é obrigatória."),
   price: z.number().min(0, "Preço é obrigatório."),
});

type ProductFormInputs = z.infer<typeof productSchema>;

interface ProductFormProps {
   onCancel: () => void;
}

export function ProductForm({ onCancel }: ProductFormProps) {
   const navigate = useNavigate();
   const {
      register,
      handleSubmit,
      formState: { errors, isSubmitting },
   } = useForm<ProductFormInputs>({
      resolver: zodResolver(productSchema),
   });

   const onSubmit: SubmitHandler<ProductFormInputs> = async (data) => {
      try {
         await api.post("/products", {
            name: data.name,
            description: data.description,
            price: data.price,
         });
         navigate(0);
      } catch (error) {
         console.error("Erro ao cadastrar produto:", error);
      }
   };

   return (
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
         <InputField
            placeholder="Digite o nome do produto"
            label="Nome*"
            {...register("name")}
            error={errors.name?.message}
         />
         <InputField
            placeholder="Digite a descrição do produto"
            label="Descrição*"
            {...register("description")}
            error={errors.description?.message}
         />
         <InputField
            placeholder="Digite o preço do produto"
            label="Preço*"
            type="number"
            step="0.01"
            {...register("price", { valueAsNumber: true })}
            error={errors.price?.message}
         />
         <div className={styles.buttons}>
            <button
               type="button"
               onClick={onCancel}
               className={styles.cancelButton}
            >
               Cancelar
            </button>
            <SubmitButton isLoading={isSubmitting}>Cadastrar</SubmitButton>
         </div>
      </form>
   );
}
