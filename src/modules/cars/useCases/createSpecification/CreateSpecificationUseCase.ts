import { ISpecificationsRepository } from "../../repositories/ISpecificationsRepository";

interface IRequest {
    name: string;
    description: string;
}

class CreateSpecificationUseCase {
    constructor(private specificationsRepository: ISpecificationsRepository) {}
    execute({ name, description }: IRequest): void {
        const specificationsAlredyExists =
            this.specificationsRepository.findByName(name);

        if (specificationsAlredyExists) {
            throw new Error("Specifications already exists!");
        }

        this.specificationsRepository.create({ name, description });
    }
}

export { CreateSpecificationUseCase };
