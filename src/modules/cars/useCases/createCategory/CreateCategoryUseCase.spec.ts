import { AppError } from "../../../../shared/errors/AppError";
import { CategoriesRepository } from "../../infra/typeorm/repositories/CategoryRepository";
import { CategoriesRepositoryInMemory } from "../../repositories/in-memory/CategoriesRepositoryInMemory";
import { CreateCategoryUseCase } from "./CreateCategoryUseCase";

let categoriesRepository: CategoriesRepositoryInMemory;
let createCategoryUseCase: CreateCategoryUseCase;

describe("Crate Category", () => {
  beforeEach(() => {
    categoriesRepository = new CategoriesRepositoryInMemory();
    createCategoryUseCase = new CreateCategoryUseCase(categoriesRepository);
  });

  it("Shoud be able create a new category", async () => {
    const category = {
      name: "Category teste",
      description: "Description teste",
    };

    await createCategoryUseCase.execute(category);

    const categoryCreated = await categoriesRepository.findByName(
      category.name
    );

    expect(categoryCreated).toHaveProperty("id");
    expect(categoryCreated).toMatchObject(category);
  });

  it("Shoud not be able create a new category with name exists", async () => {
    expect(async () => {
      const category = {
        name: "Category teste",
        description: "Description teste",
      };

      await createCategoryUseCase.execute(category);
      await createCategoryUseCase.execute(category);
    }).rejects.toBeInstanceOf(AppError);
  });
});