import { productDao } from "../daos/index.js";

const createProduct = async (createProductRequest) => {
  try {
    const { title } = createProductRequest;
    const existingProduct = await productDao.findProductByFilter({ title });

    if (existingProduct) {
      throw {
        message: "The product you want to create already exists",
        status: 400,
      };
    }

    const createdProduct = await productDao.createProduct(createProductRequest);

    return createdProduct;
  } catch (err) {
    console.log(err);

    throw err;
  }
};

const updateProduct = async (updateProductRequest, id) => {
  try {
    const existingProduct = await productDao.findProductById(id);

    if (!existingProduct) {
      throw {
        message: "The product you want to update does not exist",
        status: 400,
      };
    }

    const updatedProduct = await productDao.updateProduct(id, updateProductRequest);

    return updatedProduct;
  } catch (err) {
    console.log(err);

    throw err;
  }
};

const deleteProduct = async (id) => {
  try {
    const existingProduct = productDao.findProductById(id);

    if (!existingProduct) {
      throw {
        message: "The product you want to delete does not exist",
        status: 400,
      };
    }

    const deletedProduct = await productDao.deleteProduct(id);

    return deletedProduct;
  } catch (err) {
    console.log(err);

    throw err;
  }
};

const findAllProducts = async () => {
  try {
    const products = await productDao.findAllProducts();

    return products;
  } catch (err) {
    console.log(err);

    throw err;
  }
};

const findProductById = async (id) => {
  try {
    const product = await productDao.findProductById(id);

    if (!product) {
      throw {
        message: "The product you want to create already exists",
        status: 404,
      };
    }

    return product;
  } catch (err) {
    console.log(err);

    throw err;
  }
};

export const productService = {
  createProduct,
  updateProduct,
  deleteProduct,
  findAllProducts,
  findProductById,
};