import { Router } from "express";
import { CreateUserController } from "../modules/accounts/useCases/CreateUser/CreateUserController";
const usersRoutes = Router();

const userController = new CreateUserController();

usersRoutes.post("/", userController.handler);

export { usersRoutes };
