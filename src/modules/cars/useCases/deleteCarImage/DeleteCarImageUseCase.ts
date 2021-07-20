import { CarImagesRepository } from "@modules/cars/infra/typeorm/repositories/CarsImagesRepository";
import { AppError } from "@shared/errors/AppError";
import { inject, injectable } from "tsyringe";
import fs from "fs";
import { deleteFile } from "@utils/file";

@injectable()
class DeleteCarImageUseCase {
  constructor(
    @inject("CarImagesRepository")
    private carImagesRepository: CarImagesRepository
  ) {}

  async execute(id: string): Promise<void> {
    const carImage = await this.carImagesRepository.findById(id);

    if (!carImage) {
      throw new AppError("Car Image does not exist!");
    }

    await deleteFile("./tmp/cars/" + carImage.image_name);

    await this.carImagesRepository.delete(id);
  }
}
export { DeleteCarImageUseCase };
