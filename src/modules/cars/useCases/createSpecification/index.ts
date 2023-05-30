import { SpecificationRepository } from "../../repositories/implementations/SpecificationsRepository";
import { CreateSpecificationUseCase } from "./CreateSpecificationUseCase";
import { CreateSpecificationController } from "./CreateSpecificationController";

const specificationRepository = new SpecificationRepository();

const createCategoryUseCase = new CreateSpecificationUseCase(
    specificationRepository
);

const createSpecificationController = new CreateSpecificationController(
    createCategoryUseCase
);

export { createSpecificationController };
