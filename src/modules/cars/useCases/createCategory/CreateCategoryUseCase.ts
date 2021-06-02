import { CategoryRepository } from "../../repositories/implementations/CategoryRepository";
import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";

interface IRequest {
    name: string;
    description: string;
}

class CreateCategoryUseCase {
    // D l=10
    constructor(private categoryRepository: ICategoriesRepository) { }

    async execute({ name, description }: IRequest): Promise<void> {
        const categoryAlreadyExists = await this.categoryRepository.findByName(name);

        if (categoryAlreadyExists) {
            throw new Error("Category already exists!");
        }
        this.categoryRepository.create({ name, description });
    }
}

export { CreateCategoryUseCase };


// clase s subtipo t
// todos T podem ser substituidos pro tipo s

