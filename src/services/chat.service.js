import { prisma } from '../utils/prisma.js';

export const createChat = async ({ message, senderId, receiverId }) => {
  return await prisma.chat.create({
    data: {
      message,
      senderId,
      receiverId,
    },
  });
};

export const updateChatById = async (id, message) => {
  return await prisma.chat.update({
    where: { id },
    data: { message },
  });
};

export const findChatsBySenderAndReceiver = async (senderId, receiverId) => {
  return await prisma.chat.findMany({
    where: {
      OR: [
        {
          senderId,
        },
        { receiverId: senderId, senderId: receiverId },
      ],
    },
    include: {
      receiver: {
        select: {
          name: true,
          email: true,
          password: false,
        },
      },
      sender: {
        select: {
          name: true,
          email: true,
          password: false,
        },
      },
    },
  });
};

export const deleteChatById = async (id) => {
  return await prisma.chat.delete({
    where: {
      id,
    },
  });
};
