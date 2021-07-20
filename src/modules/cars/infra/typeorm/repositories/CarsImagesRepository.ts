import { ICarsImagesRepository } from "@modules/cars/repositories/ICarsImagesRepository";
import { getRepository, Repository } from "typeorm";
import { CarImage } from "../entities/CarImage";

class CarImagesRepository implements ICarsImagesRepository {
  private repository: Repository<CarImage>;
  constructor() {
    this.repository = getRepository(CarImage);
  }

  async create(car_id: string, image_name: string): Promise<CarImage> {
    const carImage = this.repository.create({
      car_id,
      image_name,
    });

    await this.repository.save(carImage);

    return carImage;
  }
  async findById(id: string): Promise<CarImage> {
    const carImage = await this.repository.findOne({ id: id });

    return carImage;
  }

  async delete(id: string): Promise<void> {
    await this.repository.delete({ id: id });
  }
}

export { CarImagesRepository };
