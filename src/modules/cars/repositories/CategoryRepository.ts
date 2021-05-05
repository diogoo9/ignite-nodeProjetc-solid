import { Category } from "../model/Category";
import { ICategoriesRepository, ICreateCategoryDTO } from "./ICategoriesRepository";


class CategoryRepository implements ICategoriesRepository {

    private categories: Category[];

    constructor() {
        this.categories = [];
        console.log("category created");
    }

    create({ name, description }: ICreateCategoryDTO): void {
        const category = new Category();
        Object.assign(category,
            {
                name,
                description,
                creted_at: new Date
            });

        this.categories.push(category);
    }

    list(): Category[] {
        return this.categories;
    }

    findByName(name: string) {
        return this.categories.find(category => category.name === name);
    }
}

export { CategoryRepository };