import { cartService } from "../services/cart.service.js";

const createCart = async (req, res, next) => {
  try {
    const response = await cartService.createCart(req.body);

    res.json(response);
  } catch (err) {
    next(err);
  }
};

const updateCart = async (req, res, next) => {
  try {
    const { id } = req.params;
    const response = await cartService.updateCart(req.body, id);

    res.json(response);
  } catch (err) {
    next(err);
  }
};

const deleteCart = async (req, res, next) => {
  try {
    const { id } = req.params;
    const response = await cartService.deleteCart(id);

    res.json(response);
  } catch (err) {
    next(err);
  }
};

const findAllCarts = async (req, res, next) => {
  try {
    const response = await cartService.findAllCarts();

    res.json(response);
  } catch (err) {
    next(err);
  }
};

const findCartById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const response = await cartService.findCartById(id);

    res.json(response);
  } catch (err) {
    next(err);
  }
};

export const cartController = {
  createCart,
  updateCart,
  deleteCart,
  findAllCarts,
  findCartById,  
};
