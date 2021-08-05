import { CarsRepositoryInMemory } from "@modules/cars/repositories/in-memory/CarRepositoryInMemory";
import { AppError } from "@shared/errors/AppError";
import { CreateCarUseCase } from "./CreateCarUseCase";

describe("Create Car", () => {
  let createCarUseCase: CreateCarUseCase;
  let carsRepositoryInMemory: CarsRepositoryInMemory;
  beforeEach(() => {
    carsRepositoryInMemory = new CarsRepositoryInMemory();
    createCarUseCase = new CreateCarUseCase(carsRepositoryInMemory);
  });

  it("should be able create car", async () => {
    const car = await createCarUseCase.execute({
      name: "Celta",
      description: "description",
      daily_rate: 100,
      license_plate: "ABC-1245",
      fine_amount: 60,
      brand: "Brand",
      category_id: "12334",
    });

    expect(car).toHaveProperty("id");
  });

  it("should not be able to create a car with exists licence plate ", async () => {
    await createCarUseCase.execute({
      name: "Celta",
      description: "description",
      daily_rate: 100,
      license_plate: "ABC-1245",
      fine_amount: 60,
      brand: "Brand",
      category_id: "12334",
    });
    await expect(
      createCarUseCase.execute({
        name: "Celta",
        description: "description",
        daily_rate: 100,
        license_plate: "ABC-1245",
        fine_amount: 60,
        brand: "Brand",
        category_id: "12334",
      })
    ).rejects.toEqual(new AppError("Car already exists"));
  });

  it("should be able to create a car with available true by default", async () => {
    const car = await createCarUseCase.execute({
      name: "Celta",
      description: "description",
      daily_rate: 100,
      license_plate: "ABC-1245",
      fine_amount: 60,
      brand: "Brand",
      category_id: "12334",
    });
    expect(car.available).toBe(true);
  });
});
