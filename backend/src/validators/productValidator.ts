import { body } from "express-validator";

const createProductValidator = [
   body("name").isString().notEmpty().withMessage("Name is required"),
   body("description")
      .isString()
      .notEmpty()
      .withMessage("Description is required"),
   body("price").isString().withMessage("Price is required"),
];

export { createProductValidator };
