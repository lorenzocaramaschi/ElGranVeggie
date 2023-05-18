import { productDao } from "../daos/product.dao.js";

const createProduct = async (createProductRequest) => {
  try {
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
        product: "The product you want to update does not exist",
        status: 400,
      };
    }

    const updatedProduct = await productDao.updateProduct(
      id,
      updateProductRequest
    );

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
        product: "The product you want to delete does not exist",
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
        product: "The product you want to look for does not exists",
        status: 404,
      };
    }

    return product;
  } catch (err) {
    console.log(err);

    throw err;
  }
};

const findProductsByCategory = async (category) => {
  try {
    const products = await productDao.findProductsByCategory(category);

    if (!products) {
      throw {
        products:
          "The product category you want to look for does not exists or is empty",
        status: 404,
      };
    }

    return products;
  } catch (error) {}
};

export const productService = {
  createProduct,
  updateProduct,
  deleteProduct,
  findAllProducts,
  findProductById,
  findProductsByCategory,
};
