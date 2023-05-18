import Product from "../models/Product.js";

const createProduct = async (createProductRequest) => {
  try {
    const createdProduct = await Product.create(createProductRequest);

    return createdProduct;
  } catch (err) {
    console.log(err);
  }
};

const updateProduct = async (id, updateProductRequest) => {
  try {
    const updatedProduct = await Product.updateOne(
      { _id: id },
      updateProductRequest
    );

    return updatedProduct;
  } catch (err) {
    console.log(err);
  }
};

const deleteProduct = async (id) => {
  try {
    const deletedProduct = await Product.deleteOne({ _id: id });

    return deletedProduct;
  } catch (err) {
    console.log(err);
  }
};

const findAllProducts = async () => {
  try {
    const product = await Product.find();

    return product;
  } catch (err) {
    console.log(err);
  }
};

const findProductById = async (id) => {
  try {
    const product = await Product.findById(id);

    return product;
  } catch (err) {
    console.log(err);
  }
};

const findProductsByCategory = async (category) => {
  try {
    const product = await Product.find({category});

    return product;
  } catch (err) {
    console.log(err);
  }
};

export const productDao = {
  createProduct,
  updateProduct,
  deleteProduct,
  findAllProducts,
  findProductById,
  findProductsByCategory,
};
