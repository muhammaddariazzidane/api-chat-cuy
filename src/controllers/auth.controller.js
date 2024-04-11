import { createUser, findUser } from '../services/auth.service.js';
import {
  createUserValidation,
  userLoginValidation,
} from '../validation/auth.validation.js';
import { handleValidation } from '../helpers/validation.helper.js';
import jwt from 'jsonwebtoken';
import 'dotenv/config';

export const Register = async (req, res) => {
  const { email } = req.body;
  const user = await findUser(email);

  if (user) return res.json({ message: 'Pengguna Sudah Terdaftar' });

  try {
    const validatedUser = await handleValidation(
      req,
      res,
      createUserValidation
    );

    if (!validatedUser.success) return;

    await createUser(validatedUser.data);

    return res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error('Internal server error:', error.meta.cause);
    return res.status(500).json({ message: error.meta.cause });
  }
};

export const Login = async (req, res) => {
  const { email } = req.body;
  const user = await findUser(email);

  if (!user)
    return res.status(404).json({ message: 'Pengguna Tidak ditemukan' });

  try {
    const validatedUser = await handleValidation(req, res, userLoginValidation);

    if (!validatedUser.success) return;
    const token = jwt.sign(
      {
        id: user.id,
        name: user.name,
        email: user.email,
        profilePicture: user?.profilePicture,
      },
      `${process.env.SECRET_KEY}`
    );
    return res.status(201).json({ message: 'Login Successfully', token });
  } catch (error) {
    console.error('Internal server error:', error.meta.cause);
    return res.status(500).json({ message: error.meta.cause });
  }
};
