import { faker } from "@faker-js/faker";

const products = [];

faker.locale = "es";

const createProducts = (qty) => {
  for (let i = 1; i <= qty; i++) {
    products.push({
      id: products.length ? products.length + 1 : 1,
      name: faker.commerce.product(),
      price: faker.commerce.price(),
      image: faker.image.business(),
    });
  }

  return products;
};

const getProduct = (id) => (id ? products[id - 1] : products);

const createProduct = (mock) => {
  mock.id = products.length ? products.length + 1 : 1;

  products.push(mock);

  return products[products.length - 1];
};

const updateProduct = (id, mockUpdated) => {
  const index = id - 1;

  products[index] = mockUpdated;

  return products[index];
};

const deleteProduct = (id) => {
  const deletedProduct = products[id - 1];
  products.splice(id - 1, 1);

  return deletedProduct;
};

export const fakerService = {
  createProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
};
