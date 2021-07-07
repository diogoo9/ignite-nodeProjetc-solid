import { ICreateCarDTO } from "@modules/cars/dtos/ICreateCarDTO";
import { ICarsRepository } from "@modules/cars/repositories/ICarsRepository";
import { inject, injectable } from "tsyringe";
import { getRepository, Repository } from "typeorm";
import { Car } from "../entities/Car";

@injectable()
class CarsRepository implements ICarsRepository {
  private repository: Repository<Car>;

  constructor() {
    this.repository = getRepository(Car);
  }

  async create({
    brand,
    category_id,
    daily_rate,
    description,
    fine_amount,
    license_plate,
    name,
  }: ICreateCarDTO): Promise<Car> {
    const car = this.repository.create({
      brand,
      category_id,
      daily_rate,
      description,
      fine_amount,
      license_plate,
      name,
    });
    await this.repository.save(car);

    return car;
  }
  async findByLicencePlate(licencePlate: string): Promise<Car> {
    return await this.repository.findOne({ license_plate: licencePlate });
  }

  async findAllAlailable(
    name?: string,
    brand?: string,
    category_id?: string
  ): Promise<Car[]> {
    const carsQuery = await this.repository
      .createQueryBuilder("c")
      .where("available =:available", { available: true });

    if (brand) {
      carsQuery.andWhere("brand =:brand", { brand });
    }

    if (category_id) {
      carsQuery.andWhere("category_id =:category_id", { category_id });
    }
    if (name) {
      carsQuery.andWhere("name =:name", { name });
    }

    const cars = await carsQuery.getMany();
    return cars;
  }
}

export { CarsRepository };
