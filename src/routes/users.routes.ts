import { Router } from "express";
import multer from "multer";

import { CreateUserController } from "../modules/accounts/useCases/CreateUser/CreateUserController";
import { UpdateUserAvatarController } from "../modules/accounts/useCases/UpdateUserAvatarUseCase/UpdateUserAvatarController";
import uploadConfig from "../config/upload";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

const usersRoutes = Router();

const uplodaAvatar = multer(uploadConfig.upload("./tmp/avatar"));

const userController = new CreateUserController();
const updateUserAvatarController = new UpdateUserAvatarController();

usersRoutes.post("/", userController.handler);

usersRoutes.patch(
  "/avatar",
  ensureAuthenticated,
  uplodaAvatar.single("file"),
  updateUserAvatarController.handle
);

export { usersRoutes };
