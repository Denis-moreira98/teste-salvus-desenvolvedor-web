import { Router } from "express";

//Controllers
import CreateProductController from "./controllers/products/CreateProductController";
import ListProductsController from "./controllers/products/ListProductsController";
import GetProductByIdController from "./controllers/products/GetProductByIdController";
import UpdateProductController from "./controllers/products/UpdateProductController";
import DeleteProductController from "./controllers/products/DeleteProductController";

//Middleware
import validationMiddleware from "./middlewares/validationMiddleware";
import { createProductValidator } from "./validators/productValidator";

const router = Router();

router.post(
   "/products",
   createProductValidator,
   validationMiddleware,
   new CreateProductController().handle
);
router.get("/products", new ListProductsController().handle);
router.get("/products/:id", new GetProductByIdController().handle);
router.put(
   "/products/:id",
   createProductValidator,
   validationMiddleware,
   new UpdateProductController().handle
);
router.delete("/products/:id", new DeleteProductController().handle);

export { router };
