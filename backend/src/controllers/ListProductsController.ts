import { Request, Response } from "express";
import ListProductsService from "../services/ListProductsService";

class ListProductsController {
   public async handle(req: Request, res: Response) {
      try {
         const listProducts = new ListProductsService();
         const products = await listProducts.execute();
         res.status(200).json(products);
      } catch (error) {
         res.status(500).json({ error: "Internal server error" });
      }
   }
}

export default ListProductsController;
