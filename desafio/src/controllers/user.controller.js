import Response from "../lib/response.lib.js";
import { userService } from "../services/index.js";
import validationHelper from "../validations/validationHelper.js";

const createUser = async (req, res, next) => {
  try {
    validationHelper(req);
    const response = await userService.createUser(req.body);

    res.json(new Response(response, "Success"));
  } catch (err) {
    next(err);
  }
};

const updateUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const response = await userService.updateUser(req.body, id);

    res.json(new Response(response, "Success"));
  } catch (err) {
    next(err);
  }
};

const deleteUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const response = await userService.deleteUser(id);

    res.json(new Response(response, "Success"));
  } catch (err) {
    next(err);
  }
};

const findAllUsers = async (req, res, next) => {
  try {
    const response = await userService.findAllUsers();

    res.json(new Response(response, "Success"));
  } catch (err) {
    next(err);
  }
};

const findUserById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const response = await userService.findUserById(id);

    res.json(new Response(response, "Success"));
  } catch (err) {
    next(err);
  }
};

export const userController = {
  createUser,
  updateUser,
  deleteUser,
  findAllUsers,
  findUserById,
};
