import { z } from 'zod';

export const createChatValidation = async (payload) => {
  return await z
    .object({
      message: z.string(),
    })
    .required()
    .safeParseAsync(payload);
};

export const updateChatValidation = async (payload) => {
  return await z
    .object({
      message: z.string(),
    })
    .required()
    .safeParseAsync(payload);
};
