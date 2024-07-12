import { Router } from "express";

//Controllers
import CreateProductController from "./controllers/CreateProductController";
import ListProductsController from "./controllers/ListProductsController";
import GetProductByIdController from "./controllers/GetProductByIdController";
import UpdateProductController from "./controllers/UpdateProductController";
import DeleteProductController from "./controllers/DeleteProductController";

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
