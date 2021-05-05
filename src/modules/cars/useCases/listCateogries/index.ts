import { CategoryRepository } from "../../repositories/CategoryRepository";
import { ListCategoryController } from "./ListCategoriesController";
import { ListCategoriesUseCase } from "./ListCategoriesUseCase";


const categoriesRepository = new CategoryRepository();
const listCategoriesUseCase = new ListCategoriesUseCase(categoriesRepository);
const listCategoryController = new ListCategoryController(listCategoriesUseCase);

export { listCategoryController };