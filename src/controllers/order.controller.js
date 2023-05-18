import { orderService } from "../services/order.service.js";

const createOrder = async (req, res, next) => {
  try {
    const response = await orderService.createOrder(req.body);

    res.json(response);
  } catch (err) {
    next(err);
  }
};

const updateOrder = async (req, res, next) => {
  try {
    const { id } = req.params;
    const response = await orderService.updateOrder(req.body, id);

    res.json(response);
  } catch (err) {
    next(err);
  }
};

const deleteOrder = async (req, res, next) => {
  try {
    const { id } = req.params;
    const response = await orderService.deleteOrder(id);

    res.json(response);
  } catch (err) {
    next(err);
  }
};

const findAllOrders = async (req, res, next) => {
  try {
    const response = await orderService.findAllOrders();

    res.json(response);
  } catch (err) {
    next(err);
  }
};

const findOrderById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const response = await orderService.findOrderById(id);

    res.json(response);
  } catch (err) {
    next(err);
  }
};

export const orderController = {
  createOrder,
  updateOrder,
  deleteOrder,
  findAllOrders,
  findOrderById,
};
