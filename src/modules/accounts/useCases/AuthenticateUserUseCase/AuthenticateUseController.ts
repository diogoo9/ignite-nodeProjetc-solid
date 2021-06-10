import { Response, Request } from "express";
import { container } from "tsyringe";
import { AuthenticateUserUseCase } from "./AuthenticateUserUseCase";

class AuthenticateUserController {
  async hande(request: Request, response: Response): Promise<Response> {
    const { email, password } = request.body;

    const authenticateUserUseCase = container.resolve(AuthenticateUserUseCase);

    try {
      const res = await authenticateUserUseCase.execute({
        email,
        password,
      });

      return response.status(200).send(res);
    } catch (error) {
      return response.status(401).send(error.message);
    }
  }
}

export { AuthenticateUserController };
