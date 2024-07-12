import { Request, Response } from "express";
import DeleteProductService from "../services/DeleteProductService";

class DeleteProductController {
   public async handle(req: Request, res: Response) {
      const { id } = req.params;
      try {
         const deleteProduct = new DeleteProductService();
         const product = await deleteProduct.execute(id);
         res.status(200).json({
            message: "Product deleted successfully",
            product,
         });
      } catch (error) {
         res.status(404).json({ error: error.message });
      }
   }
}

export default DeleteProductController;
