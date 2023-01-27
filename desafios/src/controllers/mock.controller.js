import { fakerService } from "../services/faker.service.js";

const generateProducts = (req, res) => {
  const quantity = 5;
  const response = fakerService.createProducts(quantity);

  res.json(response);
};

const getProduct = (req, res) => {
  const id = req.params.id ? Number(req.params.id) : null;

  const response = fakerService.getProduct(id);

  res.json(response);
};

const createProduct = (req, res) => {
  const response = fakerService.createProduct(req.body);

  res.json(response);
};

const updateProduct = (req, res) => {
  const id = Number(req.params.id);

  const response = fakerService.updateProduct(id, req.body);

  res.json(response);
};

const deleteProduct = (req, res) => {
  const id = Number(req.params.id);

  const response = fakerService.deleteProduct(id);

  res.json(response);
};

export const mockController = {
  generateProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
};
