import Product from "../../models/productModel";

class DeleteProductService {
   public async execute(productId: string) {
      const product = await Product.findByPk(productId);
      if (!product) {
         throw new Error("Product not found");
      }
      await product.destroy();
   }
}

export default DeleteProductService;
