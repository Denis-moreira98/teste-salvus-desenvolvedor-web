import { Request, Response } from "express";
import UpdateProductService from "../../services/products/UpdateProductService";

class UpdateProductController {
   public async handle(req: Request, res: Response) {
      const { id } = req.params;
      const productData = req.body;
      try {
         const updatedProduct = new UpdateProductService();
         const product = await updatedProduct.execute(String(id), productData);
         res.status(200).json({
            message: "Product updated successfully",
            product,
         });
      } catch (error) {
         res.status(404).json({ error: error.message });
      }
   }
}

export default UpdateProductController;
