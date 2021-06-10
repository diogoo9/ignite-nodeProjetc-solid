import { inject, injectable } from "tsyringe";
import { UserRepository } from "../../repositories/implementations/UsersRepository";
import { hash } from "bcrypt";

interface IRequest {
  name: string;
  email: string;
  driver_license: string;
  password: string;
}
@injectable()
class CreateUSerUseCase {
  constructor(
    @inject("UserRepository")
    private userRepository: UserRepository
  ) {}

  async execute({
    name,
    email,
    driver_license,
    password,
  }: IRequest): Promise<void> {
    const emailAlreadyExists = await this.userRepository.findByEmail(email);

    if (emailAlreadyExists) {
      throw new Error("User already exists!");
    }

    const passwordHash = await hash(password, 8);
    await this.userRepository.create({
      name,
      email,
      driver_license,
      password: passwordHash,
    });
  }
}

export { CreateUSerUseCase };
