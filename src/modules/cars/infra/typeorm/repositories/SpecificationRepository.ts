import { getRepository, Repository } from "typeorm";
import { Specifiation } from "../../infra/typeorm/entities/Specification";
import {
  ICreateSpecificationDTO,
  ISpecificationRepository,
} from "../ISpecificationRepository";

class SpecificationsRepository implements ISpecificationRepository {
  private repository: Repository<Specifiation>;

  constructor() {
    this.repository = getRepository("specifications");
  }

  async create({ name, description }: ICreateSpecificationDTO): Promise<void> {
    const specification = this.repository.create({
      name,
      description,
      created_at: new Date(),
    });

    await this.repository.save(specification);
  }

  async findByName(name: string): Promise<Specifiation> {
    const specifitation: Specifiation = await this.repository.findOne({
      name: name,
    });

    return specifitation;
  }
}

export { SpecificationsRepository };
