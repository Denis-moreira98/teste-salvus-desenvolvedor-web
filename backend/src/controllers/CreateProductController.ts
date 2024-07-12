import { Request, Response } from "express";
import CreateProductService from "../services/CreateProductService";

class CreateProductController {
   public async handle(req: Request, res: Response) {
      try {
         const createProduct = new CreateProductService();
         const product = await createProduct.execute(req.body);

         res.status(201).json({
            message: "Product created successfully",
            product,
         });
      } catch (err) {
         res.status(400).json({ error: err.message });
      }
   }
}

export default CreateProductController;
