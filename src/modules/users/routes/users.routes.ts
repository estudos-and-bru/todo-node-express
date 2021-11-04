import { Router } from 'express';
import { UserController } from '../controllers/UserController';

const usersRoutes = Router();
const userController = new UserController();

usersRoutes.post('/create', userController.create);

export { usersRoutes };
