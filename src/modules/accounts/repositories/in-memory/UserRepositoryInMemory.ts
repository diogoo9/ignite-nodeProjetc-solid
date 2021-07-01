import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { User } from "../../infra/typeorm/entities/User";
import { IUsersRepository } from "../IUsersRepository";

class UserRepositoryInMemory implements IUsersRepository {
  users: User[] = [];

  async create(user: ICreateUserDTO): Promise<void> {
    const newUser = new User();

    Object.assign(newUser, { ...user });

    this.users.push(newUser);
  }

  async findByEmail(email: string): Promise<User> {
    return this.users.find((user) => user.email == email);
  }
  async findById(id: string): Promise<User> {
    const user = this.users.find((user) => user.id === id);
    return user;
  }

  async findAll() {
    return this.users;
  }
}

export { UserRepositoryInMemory };
