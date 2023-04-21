import { User } from "../models/User.js";


const createUser = async (createUserRequest) => {
  try {
    const createdUser = await User.create(createUserRequest);

    return createdUser;
  } catch (err) {
    console.log(err);
  }
};

const updateUser = async (id, updateUserRequest) => {
  try {
    const updatedUser = await User.updateOne({ _id: id }, updateUserRequest);

    return updatedUser;
  } catch (err) {
    console.log(err);
  }
};

const deleteUser = async (id) => {
  try {
    const deletedUser = await User.deleteOne({ _id: id });

    return deletedUser;
  } catch (err) {
    console.log(err);
  }
};

const findAllUsers = async () => {
  try {
    const users = await User.find();

    return users;
  } catch (err) {
    console.log(err);
  }
};

const findUserById = async (id) => {
  try {
    const user = await User.findById(id);

    return user;
  } catch (err) {
    console.log(err);
  }
};

const findUserByFilter = async (filters) => {
  try {
    const user = await User.findOne(filters);

    return user;
  } catch (err) {
    console.log(err);
  }
};

export const userDao = {
  createUser,
  updateUser,
  deleteUser,
  findAllUsers,
  findUserById,
  findUserByFilter,
};