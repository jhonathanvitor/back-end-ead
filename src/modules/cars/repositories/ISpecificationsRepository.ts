import { Specification } from "../entities/Specification";

interface ICreateSpecificationDTO {
    name: String;
    description: String;
}

interface ISpecificationsRepository {
    create({ name, description }: ICreateSpecificationDTO): void;
    list(): Specification[];
    findByName(name: string): Specification;
}

export { ISpecificationsRepository, ICreateSpecificationDTO };
