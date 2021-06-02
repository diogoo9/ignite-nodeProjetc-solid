import { Category } from "../entities/Category";
import { ICategoriesRepository, ICreateCategoryDTO } from "./ICategoriesRepository";

class PostegraesCategoryRepository implements ICategoriesRepository {
    findByName(name: string): Category {
        console.log(name);
        return null;
    }
    list(): Category[] {
        throw new Error("Method not implemented.");
    }
    create({ name, description }: ICreateCategoryDTO): void {
        console.log(name, description);
    }

}

export { PostegraesCategoryRepository };