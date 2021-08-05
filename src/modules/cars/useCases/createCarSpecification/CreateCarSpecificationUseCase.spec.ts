import { CreateCarSpecificationUseCase } from "./CreateCarSpecificationUseCase";
import { CarsRepositoryInMemory } from "@modules/cars/repositories/in-memory/CarRepositoryInMemory";
import { AppError } from "@shared/errors/AppError";
import { SpecificationRepositoryInMemory } from "@modules/cars/repositories/in-memory/SpecificationRepositoryInMemory";

let carRepositoryInMemory: CarsRepositoryInMemory;
let createCarSpecificationUseCase: CreateCarSpecificationUseCase;
let specificationInMemory: SpecificationRepositoryInMemory;

describe("Create car specificaion", () => {
  beforeEach(() => {
    carRepositoryInMemory = new CarsRepositoryInMemory();
    specificationInMemory = new SpecificationRepositoryInMemory();
    createCarSpecificationUseCase = new CreateCarSpecificationUseCase(
      carRepositoryInMemory,
      specificationInMemory
    );
  });
  it("should not be able to add a new spcification to the non-existent car ", async () => {
    const car_id = "1234";
    const specifications_id = ["1234"];
    await expect(
      createCarSpecificationUseCase.execute({
        car_id,
        specifications_id,
      })
    ).rejects.toEqual(new AppError("Car does not exists!"));
  });

  it("should be able to add a new spcification to the car ", async () => {
    const specification = await specificationInMemory.create({
      name: "alto",
      description: "alto",
    });
    const car = await carRepositoryInMemory.create({
      name: "Celta",
      description: "description",
      daily_rate: 100,
      license_plate: "ABC-1245",
      fine_amount: 60,
      brand: "Brand",
      category_id: "12334",
    });
    const car_id = car.id;
    const specifications_id = [specification.id];

    const specificationCar = await createCarSpecificationUseCase.execute({
      car_id,
      specifications_id,
    });

    expect(specificationCar).toHaveProperty("specifications");
    expect(specificationCar.specifications.length).toBe(1);
  });
});
