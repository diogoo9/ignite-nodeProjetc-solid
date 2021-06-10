import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateUSerUseCase } from "./CreateUserUseCase";

class CreateUserController {
  async handler(request: Request, response: Response): Promise<Response> {
    const { name, email, driver_license, password } = request.body;

    const createUserUseCase = container.resolve(CreateUSerUseCase);

    try {
      await createUserUseCase.execute({
        name,
        email,
        driver_license,
        password,
      });
      return response.status(201).send();
    } catch (error) {
      return response.status(403).send(error.message);
    }
  }
}

export { CreateUserController };
