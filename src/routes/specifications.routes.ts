import { Router } from "express";
import { createSpecificationController } from "../modules/cars/useCases/createSpecification";

const specifitationRoutes = Router();


specifitationRoutes.post("/", (request, response) => {
    return createSpecificationController.handler(request, response);
})

export { specifitationRoutes };