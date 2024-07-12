import Product from "../models/productModel";

class ListProductsService {
   public async execute() {
      const products = await Product.findAll();
      return products;
   }
}

export default ListProductsService;
