import { Router } from "express";
import { usersRoutes } from "./users.routes";
import { categoriesRoutes } from "./categories.routes";
import { specifitationRoutes } from "./specifications.routes";
import { sessionsRoutes } from "./sessions.routes";

const router = Router();

router.use("/categories", categoriesRoutes);
router.use("/specifications", specifitationRoutes);
router.use("/users", usersRoutes);
router.use("/sessions", sessionsRoutes);

export { router };
