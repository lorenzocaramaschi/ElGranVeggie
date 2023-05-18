import { productService } from "../services/product.service.js";

const createProduct = async (req, res, next) => {
  try {
    const response = await productService.createProduct(req.body);

    res.json(response);
  } catch (err) {
    next(err);
  }
};

const updateProduct = async (req, res, next) => {
  try {
    const { id } = req.params;
    const response = await productService.updateProduct(req.body, id);

    res.json(response);
  } catch (err) {
    next(err);
  }
};

const deleteProduct = async (req, res, next) => {
  try {
    const { id } = req.params;
    const response = await productService.deleteProduct(id);

    res.json(response);
  } catch (err) {
    next(err);
  }
};

const findAllProducts = async (req, res, next) => {
  try {
    const response = await productService.findAllProducts();

    res.render("productos", { products: response });
  } catch (err) {
    next(err);
  }
};

const findProductById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const response = await productService.findProductById(id);
    res.render("product-detail", { products: response });
  } catch (err) {
    res.json(err.product);
    next(err);
  }
};

const findProductsByCategory = async (req, res, next) => {
  try {
    const { categoria } = req.params;
    const response = await productService.findProductsByCategory(categoria);
    res.render("productos", { products: response });
  } catch (err) {
    res.json(err.product);
    next(err);
  }
};

export const productController = {
  createProduct,
  updateProduct,
  deleteProduct,
  findAllProducts,
  findProductById,
  findProductsByCategory,
};
