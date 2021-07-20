import { Specifiation } from "../infra/typeorm/entities/Specification";

interface ICreateSpecificationDTO {
  name: string;
  description: string;
}

interface ISpecificationRepository {
  create({ name, description }: ICreateSpecificationDTO): Promise<Specifiation>;
  findByName(name: string): Promise<Specifiation>;
  findByIds(ids: string[]): Promise<Specifiation[]>;
}

export { ISpecificationRepository, ICreateSpecificationDTO };
