import { check } from "express-validator";

const createUserValidations = [
  check("name", "You need to send user name").notEmpty().trim(),
  check("password", "You need to send user password").notEmpty().trim(),
];

export const userValidations = { createUserValidations };
