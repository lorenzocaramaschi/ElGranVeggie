import { orderDao } from "../daos/order.dao.js";

const createOrder = async (createOrderRequest) => {
  try {
    const { orderNumber } = createOrderRequest;
    const existingOrder = await orderDao.findOrderByFilter({ orderNumber });

    if (existingOrder) {
      throw {
        message: "The order already exists",
        status: 400,
      };
    }
    const createdOrder = await orderDao.createOrder(createOrderRequest);

    return createdOrder;
  } catch (err) {
    console.log(err);

    throw err;
  }
};

const updateOrder = async (updateOrderRequest, id) => {
  try {
    const existingOrder = await orderDao.findOrderById(id);

    if (!existingOrder) {
      throw {
        order: "The order you want to update does not exist",
        status: 400,
      };
    }

    const updatedOrder = await orderDao.updateOrder(id, updateOrderRequest);

    return updatedOrder;
  } catch (err) {
    console.log(err);

    throw err;
  }
};

const deleteOrder = async (id) => {
  try {
    const existingOrder = orderDao.findOrderById(id);

    if (!existingOrder) {
      throw {
        order: "The order you want to delete does not exist",
        status: 400,
      };
    }

    const deletedOrder = await orderDao.deleteOrder(id);

    return deletedOrder;
  } catch (err) {
    console.log(err);

    throw err;
  }
};

const findAllOrders = async () => {
  try {
    const orders = await orderDao.findAllOrders();

    return orders;
  } catch (err) {
    console.log(err);

    throw err;
  }
};

const findOrderById = async (id) => {
  try {
    const order = await orderDao.findOrderById(id);

    if (!order) {
      throw {
        order: "The order you want to look for does not exists",
        status: 404,
      };
    }

    return order;
  } catch (err) {
    console.log(err);

    throw err;
  }
};

export const orderService = {
  createOrder,
  updateOrder,
  deleteOrder,
  findAllOrders,
  findOrderById,
};
