import { AppError } from "@shared/errors/AppError";
import { IUsersRepository } from "@modules/accounts/repositories/IUsersRepository";
import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import { inject, injectable } from "tsyringe";

interface IRequest {
  email: string;
  password: string;
}

interface IResponse {
  user: {
    name: string;
    email: string;
  };
  token: string;
}
@injectable()
class AuthenticateUserUseCase {
  constructor(
    @inject("UserRepository")
    private userRepositoy: IUsersRepository
  ) {}
  async execute({ email, password }: IRequest): Promise<IResponse> {
    //user exist
    const user = await this.userRepositoy.findByEmail(email);

    if (!user) {
      throw new AppError("User or password incorrect!");
    }
    // senha correta
    const passwordMatch = await compare(password, user.password);

    if (!passwordMatch) {
      throw new AppError("User or password incorrect!");
    }
    //gerar token

    const token = sign({}, "c4ca4238a0b923820dcc509a6f75849b", {
      subject: user.id,
      expiresIn: "2d",
    });

    const tokenReturn: IResponse = {
      user: {
        name: user.name,
        email: user.email,
      },
      token,
    };

    return tokenReturn;
  }
}

export { AuthenticateUserUseCase };
