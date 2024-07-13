import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { InputField } from "../inputField";
import { SubmitButton } from "../submitButton";
import styles from "./styles.module.css";
import api from "../../services/api/api";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const productSchema = z.object({
   name: z.string().min(1, "Nome é obrigatório."),
   description: z.string().min(1, "Descrição é obrigatória."),
   price: z
      .number({
         invalid_type_error: "Preço deve ser um número.",
         required_error: "Preço é obrigatório.",
      })
      .min(0, "Preço deve ser maior ou igual a zero."),
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
         toast.success("Produto cadastrado com sucesso!", { autoClose: 1500 });
         onCancel();

         setTimeout(() => {
            navigate(0);
         }, 1500);
      } catch (error) {
         console.error("Erro ao cadastrar produto:", error);
         toast.error("Erro ao cadastrar produto!", { autoClose: 1500 });
      }
   };

   return (
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
         <h1>Cadastrar novo produto</h1>

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
