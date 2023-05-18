import { cartDao } from "../daos/cart.dao.js";

const createCart = async (createCartRequest) => {
  try {
    const createdCart = await cartDao.createCart(createCartRequest);

    return createdCart;
  } catch (err) {
    console.log(err);

    throw err;
  }
};

const updateCart = async (updateCartRequest, id) => {
  try {
    const existingCart = await cartDao.findCartById(id);

    if (!existingCart) {
      throw {
        message: "The cart you want to update does not exist",
        status: 400,
      };
    }

    const updatedCart = await cartDao.updateCart(id, updateCartRequest);

    return updatedCart;
  } catch (err) {
    console.log(err);

    throw err;
  }
};

const deleteCart = async (id) => {
  try {
    const existingCart = cartDao.findCartById(id);

    if (!existingCart) {
      throw {
        message: "The cart you want to delete does not exist",
        status: 400,
      };
    }

    const deletedCart = await cartDao.deleteCart(id);

    return deletedCart;
  } catch (err) {
    console.log(err);

    throw err;
  }
};

const findAllCarts = async () => {
  try {
    const carts = await cartDao.findAllCarts();

    return carts;
  } catch (err) {
    console.log(err);

    throw err;
  }
};

const findCartById = async (id) => {
  try {
    const cart = await cartDao.findCartById(id);

    if (!cart) {
      throw {
        message: "The cart you want to look for does not exists",
        status: 404,
      };
    }

    return cart;
  } catch (err) {
    console.log(err);

    throw err;
  }
};

export const cartService = {
  createCart,
  updateCart,
  deleteCart,
  findAllCarts,
  findCartById,
};
