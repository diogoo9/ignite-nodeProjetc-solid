import { CreateCarSpecificationUseCase } from "./CreateCarSpecificationUseCase";
import { CarsRepositoryInMemory } from "@modules/cars/repositories/in-memory/CarRepositoryInMemory";

let carRepositoryInMemory: CarsRepositoryInMemory;
let createCarSpecificationUseCase: CreateCarSpecificationUseCase;

describe("Create car specificaion", () => {
  beforeEach(() => {
    carRepositoryInMemory = new CarsRepositoryInMemory();
    createCarSpecificationUseCase = new CreateCarSpecificationUseCase(
      carRepositoryInMemory
    );
  });

  it("should be able to add a new spcification to the car ", async () => {
    const car_id = "1234";
    const specifications_id = ["1234"];

    await createCarSpecificationUseCase.execute({ car_id, specifications_id });
  });
});
