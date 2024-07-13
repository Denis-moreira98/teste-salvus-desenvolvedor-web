import { Request, Response } from "express";
import GetProductByIdService from "../../services/products/GetProductByIdService";

class GetProductByIdController {
   public async handle(req: Request, res: Response) {
      const { id } = req.params;
      try {
         const getProductById = new GetProductByIdService();
         const product = await getProductById.execute(id);
         res.status(200).json(product);
      } catch (error) {
         res.status(404).json({ error: error.message });
      }
   }
}

export default GetProductByIdController;
