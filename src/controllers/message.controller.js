import { messageService } from "../services/message.service.js";

const createMessage = async (req, res, next) => {
  try {
    const response = await messageService.createMessage(req.body);

    res.json(response);
  } catch (err) {
    next(err);
  }
};

const updateMessage = async (req, res, next) => {
  try {
    const { id } = req.params;
    const response = await messageService.updateMessage(req.body, id);

    res.json(response);
  } catch (err) {
    next(err);
  }
};

const deleteMessage = async (req, res, next) => {
  try {
    const { id } = req.params;
    const response = await messageService.deleteMessage(id);

    res.json(response);
  } catch (err) {
    next(err);
  }
};

const findAllMessages = async (req, res, next) => {
  try {
    const response = await messageService.findAllMessages();

    res.json(response);
  } catch (err) {
    next(err);
  }
};

const findMessageById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const response = await messageService.findMessageById(id);

    res.json(response);
  } catch (err) {
    next(err);
  }
};

export const messageController = {
  createMessage,
  updateMessage,
  deleteMessage,
  findAllMessages,
  findMessageById,
};
