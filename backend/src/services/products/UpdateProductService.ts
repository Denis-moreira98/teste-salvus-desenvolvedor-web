import Product from "../../models/productModel";

class UpdateProductService {
   public async execute(productId: string, productData: Partial<Product>) {
      const product = await Product.findByPk(productId);
      if (!product) {
         throw new Error("Product not found");
      }
      await product.update(productData);
      return product;
   }
}

export default UpdateProductService;
