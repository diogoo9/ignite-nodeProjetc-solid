import { Router } from "express";
import { SpecificationRepository } from "../modules/cars/repositories/SpecificationRepository";

import { CreateSpecificationService } from "../modules/cars/services/CreateSpeficationService";

const specifitationRoutes = Router();

const specificationsRepository = new SpecificationRepository();

specifitationRoutes.post("/", (request, response) => {
    const { name, description } = request.body;
    const createSpecificationService = new CreateSpecificationService(
        specificationsRepository
    );

    createSpecificationService.execute({ name, description });

    return response.status(201).send();
})

export { specifitationRoutes };