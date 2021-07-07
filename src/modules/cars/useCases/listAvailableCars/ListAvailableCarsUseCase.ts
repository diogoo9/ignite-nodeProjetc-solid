import { Car } from "@modules/cars/infra/typeorm/entities/Car";
import { ICarsRepository } from "@modules/cars/repositories/ICarsRepository";
import { inject, injectable } from "tsyringe";

interface IRequest {
  brand?: string;
  category_id?: string;
  name?: string;
}

@injectable()
class ListAvailableCarsUseCase {
  constructor(
    @inject("CarsRepository")
    private carReposiory: ICarsRepository
  ) {}
  async execute({ name, brand, category_id }: IRequest): Promise<Car[]> {
    const cars = await this.carReposiory.findAllAlailable(
      name,
      brand,
      category_id
    );
    return cars;
  }
}

export { ListAvailableCarsUseCase };
