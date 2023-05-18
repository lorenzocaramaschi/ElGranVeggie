import { userDao } from "../daos/user.dao.js";

const createUser = async (createUserRequest) => {
  try {
    const { email } = createUserRequest;
    const existingUser = await userDao.findUserByFilter({ email });

    if (existingUser) {
      throw {
        message: "The user you want to create already exists",
        status: 400,
      };
    }
    const createdUser = await userDao.createUser(createUserRequest);

    return createdUser;
  } catch (err) {
    console.log(err);

    throw err;
  }
};

const updateUser = async (updateUserRequest, id) => {
  try {
    const existingUser = await userDao.findUserById(id);

    if (!existingUser) {
      throw {
        user: "The user you want to update does not exist",
        status: 400,
      };
    }

    const updatedUser = await userDao.updateUser(id, updateUserRequest);

    return updatedUser;
  } catch (err) {
    console.log(err);

    throw err;
  }
};

const deleteUser = async (id) => {
  try {
    const existingUser = userDao.findUserById(id);

    if (!existingUser) {
      throw {
        user: "The user you want to delete does not exist",
        status: 400,
      };
    }

    const deletedUser = await userDao.deleteUser(id);

    return deletedUser;
  } catch (err) {
    console.log(err);

    throw err;
  }
};

const findAllUsers = async () => {
  try {
    const users = await userDao.findAllUsers();

    return users;
  } catch (err) {
    console.log(err);

    throw err;
  }
};

const findUserById = async (id) => {
  try {
    const user = await userDao.findUserById(id);

    if (!user) {
      throw {
        user: "The user you want to look for does not exists",
        status: 404,
      };
    }

    return user;
  } catch (err) {
    console.log(err);

    throw err;
  }
};

export const userService = {
  createUser,
  updateUser,
  deleteUser,
  findAllUsers,
  findUserById,
};
