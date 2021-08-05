import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListRentalsByUserIdUseUseCase } from "./ListRentalsByUserIdUseCase";

class ListRentalsByUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const user_id = request.user.id;

    const listRentalsByUserIdUseCase = container.resolve(
      ListRentalsByUserIdUseUseCase
    );

    const rentalsByUser = await listRentalsByUserIdUseCase.execute(user_id);

    return response.json(rentalsByUser);
  }
}

export { ListRentalsByUserController };
