import { Router } from "express";
import { AuthenticateUserController } from "../modules/accounts/useCases/AuthenticateUserUseCase/AuthenticateUseController";

const sessionsRoutes = Router();

const authenticateUserController = new AuthenticateUserController();

sessionsRoutes.post("/", authenticateUserController.hande);

export { sessionsRoutes };
