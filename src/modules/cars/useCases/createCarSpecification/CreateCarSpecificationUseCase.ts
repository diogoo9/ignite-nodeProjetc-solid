import "reflect-metadata";
import { ISpecificationRepository } from "@modules/cars/repositories/ISpecificationRepository";
import { ICarsRepository } from "@modules/cars/repositories/ICarsRepository";
import { Car } from "@modules/cars/infra/typeorm/entities/Car";
import { AppError } from "@shared/errors/AppError";
import { inject, injectable } from "tsyringe";

interface IRequest {
  car_id: string;
  specifications_id: string[];
}
@injectable()
class CreateCarSpecificationUseCase {
  constructor(
    @inject("CarsRepository") private carsRepository: ICarsRepository,
    @inject("SpecificationsRepository")
    private specificationRepository: ISpecificationRepository
  ) {}

  async execute({ car_id, specifications_id }: IRequest): Promise<Car> {
    const existsCar = await this.carsRepository.findById(car_id);

    if (!existsCar) {
      throw new AppError("Car does not exists!");
    }

    const specifications = await this.specificationRepository.findByIds(
      specifications_id
    );

    existsCar.specifications = specifications;

    await this.carsRepository.create(existsCar);

    return existsCar;
  }
}
export { CreateCarSpecificationUseCase };
