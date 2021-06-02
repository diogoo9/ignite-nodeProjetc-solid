import { Specifiation } from "../entities/Specification";

interface ICreateSpecificationDTO {
    name: string;
    description: string;
}

interface ISpecificationRepository {
    create({ name, description }: ICreateSpecificationDTO): void;
    findByName(name: string): Specifiation;
}


export { ISpecificationRepository, ICreateSpecificationDTO }