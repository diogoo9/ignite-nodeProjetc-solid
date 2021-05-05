import { Request, Response } from "express";
import { ListCategoriesUseCase } from "./ListCategoriesUseCase";

class ListCategoryController {

    constructor(private listCategoriesUSeCase: ListCategoriesUseCase) { }

    handle(request: Request, response: Response) {
        const all = this.listCategoriesUSeCase.execute();

        return response.json(all);
    }
}

export { ListCategoryController };