import { check } from "express-validator";

const createProductValidations = [
  check("title", "You need to send product title").notEmpty().trim(),
  check("price", "You need to send product price")
    .notEmpty()
    .trim()
    .isNumeric(),
  check("category", "You need to send product category").notEmpty().trim(),
  check("description", "You need to send product description")
    .notEmpty()
    .trim(),
];

export const productValidations = { createProductValidations };
