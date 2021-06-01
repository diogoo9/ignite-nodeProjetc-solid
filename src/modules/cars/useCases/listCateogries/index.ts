import { CategoryRepository } from "../../repositories/implementations/CategoryRepository";
import { ListCategoryController } from "./ListCategoriesController";
import { ListCategoriesUseCase } from "./ListCategoriesUseCase";


const categoriesRepository = CategoryRepository.getInstance();
const listCategoriesUseCase = new ListCategoriesUseCase(categoriesRepository);
const listCategoryController = new ListCategoryController(listCategoriesUseCase);

export { listCategoryController };