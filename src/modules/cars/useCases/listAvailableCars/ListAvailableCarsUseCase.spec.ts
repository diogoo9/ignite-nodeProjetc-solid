import { CarsRepository } from "@modules/cars/infra/typeorm/repositories/CarRepository";
import { CarsRepositoryInMemory } from "@modules/cars/repositories/in-memory/CarRepositoryInMemory";
import { ListAvailableCarsUseCase } from "./ListAvailableCarsUseCase";

let listAvailableCarsUseCase: ListAvailableCarsUseCase;
let carsRepositoryInMemory: CarsRepositoryInMemory;

describe("List Car", () => {
  beforeEach(() => {
    carsRepositoryInMemory = new CarsRepositoryInMemory();
    listAvailableCarsUseCase = new ListAvailableCarsUseCase(
      carsRepositoryInMemory
    );
  });

  it("should be able to list all available cars", async () => {
    const car = await carsRepositoryInMemory.create({
      name: "Car A1",
      description: "carro teste",
      daily_rate: 140,
      license_plate: "CAR-0001",
      fine_amount: 100,
      brand: "Audi",
      category_id: "05b864a4-bd1e-4620-b857-8e80ab5a0a18",
    });

    const cars = await listAvailableCarsUseCase.execute({
      brand: "teste",
    });
    expect(cars).toEqual([car]);
  });

  it("should be able list avaiable cars by filter", async () => {
    const car = await carsRepositoryInMemory.create({
      name: "Car A1",
      description: "carro teste",
      daily_rate: 140,
      license_plate: "CAR-0001",
      fine_amount: 100,
      brand: "Audi",
      category_id: "05b864a4-bd1e-4620-b857-8e80ab5a0a18",
    });

    const cars = await listAvailableCarsUseCase.execute({
      brand: "Audi",
    });
    expect(cars).toEqual([car]);
  });

  it("should be able list avaiable cars by name", async () => {
    const car = await carsRepositoryInMemory.create({
      name: "Car A1",
      description: "carro teste",
      daily_rate: 140,
      license_plate: "CAR-0001",
      fine_amount: 100,
      brand: "Audi",
      category_id: "05b864a4-bd1e-4620-b857-8e80ab5a0a18",
    });

    const cars = await listAvailableCarsUseCase.execute({
      name: "Car A1",
    });

    expect(cars).toEqual([car]);
  });

  it("should be able list avaiable cars by category_id", async () => {
    const car = await carsRepositoryInMemory.create({
      name: "Car A1",
      description: "carro teste",
      daily_rate: 140,
      license_plate: "CAR-0001",
      fine_amount: 100,
      brand: "Audi",
      category_id: "05b864a4-bd1e-4620-b857-8e80ab5a0a18",
    });

    const cars = await listAvailableCarsUseCase.execute({
      category_id: "05b864a4-bd1e-4620-b857-8e80ab5a0a18",
    });

    expect(cars).toEqual([car]);
  });
});
