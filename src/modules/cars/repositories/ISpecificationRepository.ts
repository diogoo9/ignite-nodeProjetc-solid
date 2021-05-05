import { Specifiation } from "../model/Specification";

interface ICreateSpecificationDTO {
    name: string;
    description: string;
}

interface ISpecificationRepository {
    create({ name, description }: ICreateSpecificationDTO): void;
    findByName(name: string): Specifiation;
}


export { ISpecificationRepository, ICreateSpecificationDTO }