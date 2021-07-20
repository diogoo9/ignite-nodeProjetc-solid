import {
  ICreateSpecificationDTO,
  ISpecificationRepository,
} from "@modules/cars/repositories/ISpecificationRepository";
import { getRepository, In, Repository } from "typeorm";
import { Specification } from "../entities/Specification";

class SpecificationsRepository implements ISpecificationRepository {
  private repository: Repository<Specification>;

  constructor() {
    this.repository = getRepository("specifications");
  }

  async create({
    name,
    description,
  }: ICreateSpecificationDTO): Promise<Specification> {
    const specification = this.repository.create({
      name,
      description,
      created_at: new Date(),
    });

    await this.repository.save(specification);

    return specification;
  }

  async findByName(name: string): Promise<Specification> {
    const specifitation: Specification = await this.repository.findOne({
      name: name,
    });

    return specifitation;
  }

  async findByIds(ids: string[]): Promise<Specification[]> {
    const specifitcations = await this.repository.find({ id: In(ids) });
    return specifitcations;
  }
}

export { SpecificationsRepository };
