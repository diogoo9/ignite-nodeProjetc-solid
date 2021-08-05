import { AppError } from "@shared/errors/AppError";
import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { UserRepositoryInMemory } from "@modules/accounts/repositories/in-memory/UserRepositoryInMemory";

import { AuthenticateUserUseCase } from "./AuthenticateUserUseCase";
import { CreateUSerUseCase } from "../CreateUser/CreateUserUseCase";

let userRepositoryInMemory: UserRepositoryInMemory;
let createUSerUseCase: CreateUSerUseCase;
let authenticaUserUseCase: AuthenticateUserUseCase;

describe("Autheticate User", () => {
  beforeEach(() => {
    userRepositoryInMemory = new UserRepositoryInMemory();
    createUSerUseCase = new CreateUSerUseCase(userRepositoryInMemory);
    authenticaUserUseCase = new AuthenticateUserUseCase(userRepositoryInMemory);
  });

  it("should be able to authenticate an user", async () => {
    const user: ICreateUserDTO = {
      name: "Diogo Santos",
      password: "123456",
      email: "diogo@mysite.com",
      driver_license: "asa4dsd4s-dsdsd-sdsd5565-sddsd1",
    };

    await createUSerUseCase.execute({
      ...user,
    });

    const result = await authenticaUserUseCase.execute({
      email: user.email,
      password: user.password,
    });

    expect(result).toHaveProperty("token");
  });

  it("should not be able authenticate an nonexistent user", async () => {
    await expect(
      authenticaUserUseCase.execute({
        email: "diogo@noexists.com",
        password: "12345",
      })
    ).rejects.toEqual(new AppError("User or password incorrect!"));
  });

  it("should not be able atuthenticate with incorrect password", async () => {
    const user: ICreateUserDTO = {
      name: "Diogo Santos",
      password: "123456",
      email: "diogo@mysite.com",
      driver_license: "asa4dsd4s-dsdsd-sdsd5565-sddsd1",
    };

    await createUSerUseCase.execute({
      ...user,
    });

    await expect(
      authenticaUserUseCase.execute({
        email: user.email,
        password: "1",
      })
    ).rejects.toEqual(new AppError("User or password incorrect!"));
  });
});
