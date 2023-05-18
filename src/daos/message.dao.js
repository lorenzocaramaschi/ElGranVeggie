import Message from "../models/Message.js";

const createMessage = async (createMessageRequest) => {
  try {
    const createdMessage = await Message.create(createMessageRequest);

    return createdMessage;
  } catch (err) {
    console.log(err);
  }
};

const updateMessage = async (id, updateMessageRequest) => {
  try {
    const updatedMessage = await Message.updateOne(
      { _id: id },
      updateMessageRequest
    );

    return updatedMessage;
  } catch (err) {
    console.log(err);
  }
};

const deleteMessage = async (id) => {
  try {
    const deletedMessage = await Message.deleteOne({ _id: id });

    return deletedMessage;
  } catch (err) {
    console.log(err);
  }
};

const findAllMessages = async () => {
  try {
    const message = await Message.find();

    return message;
  } catch (err) {
    console.log(err);
  }
};

const findMessageById = async (id) => {
  try {
    const message = await Message.findById(id);

    return message;
  } catch (err) {
    console.log(err);
  }
};

const findMessageByFilter = async (filters) => {
  try {
    const message = await Message.findOne(filters);

    return message;
  } catch (err) {
    console.log(err);
  }
};

export const messageDao = {
  createMessage,
  updateMessage,
  deleteMessage,
  findAllMessages,
  findMessageById,
  findMessageByFilter,
};
