import { Daos } from "../daos/index.js";
import { carts } from "../models/carts.js";

const Cart = new Daos.CartDao(carts);

const getAllCarts = async (req, res) => {
    try {
        const response = await Cart.getAll();

        res.json(response);
    } catch (err) {
        throw new Error();
    }
};

const createCart = async (req, res) => {
    try {
        const { timestamp, products } = req.body;
        await Cart.create({ timestamp, products });
        const response = await Cart.getAll();
        res.json(response);
    } catch (err) {
        throw new Error();
    }
};

const updateCart = async (req, res) => {
    try {
        const { id } = req.params;
        const { timestamp, products } = req.body;
        await Cart.update(Number(id), { timestamp, products });
        return "You have updated the cart!";
    } catch (err) {
        throw new Error();
    }
};

const deleteCart = async (req, res) => {
    try {
        const { id } = req.params;
        await Cart.delete(Number(id));
        return "You have deleted the cart successfully!";
    } catch (err) {
        throw new Error();
    }
};

export const cartController = { getAllCarts, createCart, updateCart, deleteCart };