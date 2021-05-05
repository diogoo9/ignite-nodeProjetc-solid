import { Specifiation } from "../model/Specification";
import { ICreateSpecificationDTO, ISpecificationRepository } from "./ISpecificationRepository";

class SpecificationRepository implements ISpecificationRepository {
    private specifications: Specifiation[];

    constructor() {
        this.specifications = [];
    }

    create({ name, description }: ICreateSpecificationDTO): void {
        const specification = new Specifiation();

        Object.assign(specification, {
            name,
            description,
            created_at: new Date()
        })

        this.specifications.push(specification);
    }

    findByName(name: string): Specifiation {
        const specifitation = this.specifications.find(specification => specification.name === name);

        return specifitation;
    }
}

export { SpecificationRepository };