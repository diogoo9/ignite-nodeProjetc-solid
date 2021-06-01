import { Request, Response } from "express";
import { CreateSpecificationUseCase } from "./CreateSpeficationUseCase";


class CreateSpecificationController {
    constructor(private createSpecificationUseCase: CreateSpecificationUseCase) {

    }

    handler(request: Request, response: Response) {
        const { name, description } = request.body;

        this.createSpecificationUseCase.execute({ name, description });

        return response.status(201).send();
    }
}

export { CreateSpecificationController };