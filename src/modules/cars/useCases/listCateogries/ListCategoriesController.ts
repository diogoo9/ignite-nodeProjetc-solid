import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListCategoriesUseCase } from "./ListCategoriesUseCase";

class ListCategoryController {

    constructor() { }

    async handle(request: Request, response: Response): Promise<Response> {

        const lilistCategoriesUSeCase = await container.resolve(ListCategoriesUseCase);
        const all = await lilistCategoriesUSeCase.execute();

        return response.json(all);
    }
}

export { ListCategoryController };