import { response, Router } from "express";
import { Category } from "../model/Category";
import { CateogyRepository } from "../repositories/CategoryRepository";

const categoriesRoutes = Router();
const cateogyRepository = new CateogyRepository();

const categories: Category[] = [];


categoriesRoutes.post("/", (request, response) => {
    const { name, description } = request.body;

    const categoryAlreadyExists = cateogyRepository.findByName(name);

    if(categoryAlreadyExists){
        return response.status(400).json({error: "Category alteady exists!"});
    }

    cateogyRepository.create({ name, description });
    return response.status(201).send();
});

categoriesRoutes.get("/", (request, response) => {
    const all = cateogyRepository.list();

    return response.json(all);
});

export { categoriesRoutes }