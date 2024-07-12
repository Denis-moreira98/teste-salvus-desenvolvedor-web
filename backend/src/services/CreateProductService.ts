import Product from "../models/productModel";

class CreateProductService {
   public async execute(productData: Partial<Product>) {
      const product = await Product.create(productData);
      return product;
   }
}
export default CreateProductService;
