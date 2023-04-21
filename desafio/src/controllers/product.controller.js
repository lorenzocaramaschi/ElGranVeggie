import Response from "../lib/response.lib.js";
import { productService } from "../services/index.js";
import validationHelper from "../validations/validationHelper.js";

const createProduct = async (req, res, next) => {
  try {
    validationHelper(req);
    const response = await productService.createProduct(req.body);

    res.json(new Response(response, "Success"));
  } catch (err) {
    next(err);
  }
};

const updateProduct = async (req, res, next) => {
  try {
    const { id } = req.params;
    const response = await productService.updateProduct(req.body, id);

    res.json(new Response(response, "Success"));
  } catch (err) {
    next(err);
  }
};

const deleteProduct = async (req, res, next) => {
  try {
    const { id } = req.params;
    const response = await productService.deleteProduct(id);

    res.json(new Response(response, "Success"));
  } catch (err) {
    next(err);
  }
};

const findAllProducts = async (req, res, next) => {
  try {
    const response = await productService.findAllProducts();

    res.json(new Response(response, "Success"));
  } catch (err) {
    next(err);
  }
};

const findProductById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const response = await productService.findProductById(id);

    res.json(new Response(response, "Success"));
  } catch (err) {
    next(err);
  }
};

export const productController = {
  createProduct,
  updateProduct,
  deleteProduct,
  findAllProducts,
  findProductById,
};
