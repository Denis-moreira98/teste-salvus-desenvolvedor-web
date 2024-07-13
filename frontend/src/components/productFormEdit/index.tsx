import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { InputField } from "../inputField";
import { SubmitButton } from "../submitButton";
import styles from "../productForm/styles.module.css";
import api from "../../services/api/api";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
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
   productId: number;
   initialData: { name: string; description: string; price: string };
}

export function ProductFormEdit({
   onCancel,
   productId,
   initialData,
}: ProductFormProps) {
   const navigate = useNavigate();
   const {
      register,
      handleSubmit,
      setValue,
      formState: { errors, isSubmitting },
   } = useForm<ProductFormInputs>({
      resolver: zodResolver(productSchema),
   });

   useEffect(() => {
      setValue("name", initialData.name);
      setValue("description", initialData.description);
      setValue("price", parseFloat(initialData.price));
   }, [initialData, setValue]);

   async function onSubmit(data: ProductFormInputs) {
      try {
         await api.put(`/products/${productId}`, {
            name: data.name,
            description: data.description,
            price: data.price,
         });
         toast.success("Produto editado com sucesso!", { autoClose: 1500 });
         onCancel();

         setTimeout(() => {
            navigate(0);
         }, 1500);
      } catch (error) {
         toast.error("Erro ao atualizar produto!", { autoClose: 1500 });
         console.error("Erro ao atualizar produto:", error);
      }
   }

   return (
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
         <h1>
            Editar produto: <strong>{initialData.name}</strong>
         </h1>

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
            <SubmitButton isLoading={isSubmitting}>Salvar</SubmitButton>
         </div>
      </form>
   );
}
