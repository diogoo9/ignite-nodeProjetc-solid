import { ICarsRepository } from "@modules/cars/repositories/ICarsRepository";
import { AppError } from "@shared/errors/AppError";
import { inject, injectable, injectAll } from "tsyringe";

interface IRequest {
  car_id: string;
  specifications_id: string[];
}
/* @injectable() */
class CreateCarSpecificationUseCase {
  constructor(
    /* @inject("CarsRepository") */
    private carsRepository: ICarsRepository
  ) {}

  async execute({ car_id, specifications_id }: IRequest): Promise<void> {
    const existsCar = await this.carsRepository.findById(car_id);

    if (existsCar) {
      throw new AppError("Car does not exists!");
    }
  }
}
export { CreateCarSpecificationUseCase };
