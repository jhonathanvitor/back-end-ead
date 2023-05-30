import { Specification } from "../model/Specification";

interface ICreateSpecificationDTO {
    name: String;
    description: String;
}

interface ISpecificationsRepository {
    create({ name, description }: ICreateSpecificationDTO): void;
    list(): Specification[];
    findByName(name: String): ISpecificationsRepository;
}

export { ICreateSpecificationDTO, ISpecificationsRepository };
