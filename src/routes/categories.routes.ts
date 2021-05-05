import { response, Router } from "express";
import { Category } from "../modules/cars/model/Category";
import { CategoryRepository } from "../modules/cars/repositories/CategoryRepository";
import { createCategoryController } from "../modules/cars/useCases/createCategory";
import { listCategoryController } from "../modules/cars/useCases/listCateogries";

const categoriesRoutes = Router();
const cateogyRepository = new CategoryRepository();

const categories: Category[] = [];


categoriesRoutes.post("/", (request, response) => {
    return createCategoryController.handle(request, response);
});

categoriesRoutes.get("/", (request, response) => {
    return listCategoryController.handle(request, response);
});

export { categoriesRoutes }