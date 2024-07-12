import { body } from "express-validator";

const createProductValidator = [
   body("name").isString().notEmpty().withMessage("Name is required"),
   body("description")
      .isString()
      .notEmpty()
      .withMessage("Description is required"),
   body("price")
      .isNumeric()
      .withMessage("Price must be a number")
      .notEmpty()
      .withMessage("Price is required"),
];

export { createProductValidator };
