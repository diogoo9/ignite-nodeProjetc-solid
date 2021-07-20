import { Router } from "express";
import { usersRoutes } from "./users.routes";
import { categoriesRoutes } from "./categories.routes";
import { specificationRoutes } from "./specifications.routes";
import { sessionsRoutes } from "./sessions.routes";
import { carsRoutes } from "./car.routes";
import { rentalRoutes } from "./rental.routes";

const router = Router();

router.use("/categories", categoriesRoutes);
router.use("/specifications", specificationRoutes);
router.use("/users", usersRoutes);
router.use("/cars", carsRoutes);
router.use("/sessions", sessionsRoutes);
router.use("/rentals", rentalRoutes);

export { router };
