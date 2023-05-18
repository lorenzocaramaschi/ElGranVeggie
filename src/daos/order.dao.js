import Order from "../models/Order.js";

const createOrder = async (createOrderRequest) => {
  try {
    const createdOrder = await Order.create(createOrderRequest);

    return createdOrder;
  } catch (err) {
    console.log(err);
  }
};

const updateOrder = async (id, updateOrderRequest) => {
  try {
    const updatedOrder = await Order.updateOne({ _id: id }, updateOrderRequest);

    return updatedOrder;
  } catch (err) {
    console.log(err);
  }
};

const deleteOrder = async (id) => {
  try {
    const deletedOrder = await Order.deleteOne({ _id: id });

    return deletedOrder;
  } catch (err) {
    console.log(err);
  }
};

const findAllOrders = async () => {
  try {
    const order = await Order.find();

    return order;
  } catch (err) {
    console.log(err);
  }
};

const findOrderById = async (id) => {
  try {
    const order = await Order.findById(id);

    return order;
  } catch (err) {
    console.log(err);
  }
};

const findOrderByFilter = async (filters) => {
  try {
    const order = await Order.findOne(filters);

    return order;
  } catch (err) {
    console.log(err);
  }
};

export const orderDao = {
  createOrder,
  updateOrder,
  deleteOrder,
  findAllOrders,
  findOrderById,
  findOrderByFilter,
};
