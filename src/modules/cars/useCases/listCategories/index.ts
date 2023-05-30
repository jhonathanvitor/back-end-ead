import { CategoriesRepository } from "../../repositories/implementations/CategoriesRepository";
import { ListCategoryController } from "./ListCategoriesController";
import { ListCategoryUseCase } from "./ListCategoriesUseCase";

const categoriesRepository = CategoriesRepository.getInstance();

const listCategoriesUseCase = new ListCategoryUseCase(categoriesRepository);

const listCategoryController = new ListCategoryController(
    listCategoriesUseCase
);

export { listCategoryController };
