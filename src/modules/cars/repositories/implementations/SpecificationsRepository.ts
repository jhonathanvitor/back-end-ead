import { Specification } from "../../model/Specification";
import {
    ICreateSpecificationDTO,
    ISpecificationsRepository,
} from "../ISpecificationsRepository";

class SpecificationRepository implements ISpecificationsRepository {
    private specifications: Specification[];

    constructor() {
        this.specifications = [];
    }

    create({ name, description }: ICreateSpecificationDTO): void {
        const specifications = new Specification();

        Object.assign(specifications, {
            name,
            description,
            created_at: new Date(),
        });

        this.specifications.push(specifications);
    }

    list(): Specification[] {
        return this.specifications;
    }

    findByName(name: String): ISpecificationsRepository {
        const specifications = this.specifications.find(
            (specifications) => specifications.name === name
        );
        return specifications;
    }
}

export { SpecificationRepository };
