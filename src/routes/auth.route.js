import { Router } from 'express';
import { Login, Register } from '../controllers/auth.controller.js';
import { checkAuth } from '../middleware/auth.middleware.js';

export const AuthRouter = new Router();

AuthRouter.use(checkAuth);

AuthRouter.post('/register', Register);
AuthRouter.post('/login', Login);
