import { Router } from "express";
import { usersRoutes } from "./users.routes";
import { categoriesRoutes } from "./categories.routes";
import { specifitationRoutes } from "./specifications.routes";
import { sessionsRoutes } from "./sessions.routes";
import { carsRoutes } from "./car.routes";

const router = Router();

router.use("/categories", categoriesRoutes);
router.use("/specifications", specifitationRoutes);
router.use("/users", usersRoutes);
router.use("/cars", carsRoutes);
router.use("/sessions", sessionsRoutes);

export { router };
