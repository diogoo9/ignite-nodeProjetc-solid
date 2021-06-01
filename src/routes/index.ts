import { Router } from "express";
import { categoriesRoutes } from "./categories.routes";
import { specifitationRoutes } from "./specifications.routes";

const router = Router();

router.use("/categories", categoriesRoutes);
router.use("/specifications", specifitationRoutes);

export { router };