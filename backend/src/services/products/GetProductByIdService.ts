import Product from "../../models/productModel";

class GetProductByIdService {
   public async execute(productId: string) {
      const product = await Product.findByPk(productId);
      if (!product) {
         throw new Error("Product not found");
      }
      return product;
   }
}

export default GetProductByIdService;
