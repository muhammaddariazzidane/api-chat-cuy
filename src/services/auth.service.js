import { prisma } from '../utils/prisma.js';
import { hash } from 'bcrypt';

export const createUser = async (payload) => {
  const hashedPassword = await hash(payload.password, 10);

  return await prisma.user.create({
    data: {
      email: payload.email,
      name: payload.name,
      password: hashedPassword,
      profilePicture: payload.profilePicture
        ? payload.profilePicture
        : 'https://figma.com',
    },
  });
};

export const findUser = async (email) => {
  return await prisma.user.findUnique({
    where: {
      email,
    },
  });
};
