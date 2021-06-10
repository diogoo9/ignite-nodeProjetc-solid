import { Router } from "express";
import { CreateSpecificationController } from "../modules/cars/useCases/createSpecification/CreateSpecificationController";

const specifitationRoutes = Router();

const createSpecificationController = new CreateSpecificationController();

specifitationRoutes.post("/", createSpecificationController.handler);

export { specifitationRoutes };
