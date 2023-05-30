import { Category } from "../model/Category";

interface ICategoriesCategoryDTO {
    name: String;
    description: String;
}

interface ICategoriesRepository {
    create({ name, description }: ICategoriesCategoryDTO): void;
    list(): Category[];
    findByName(name: string): Category;
}

export { ICategoriesRepository, ICategoriesCategoryDTO };
