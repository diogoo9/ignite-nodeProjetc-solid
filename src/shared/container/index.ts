import { container } from "tsyringe";

import { SpecificationsRepository } from "@modules/cars/infra/typeorm/repositories/SpecificationRepository";
import { ISpecificationRepository } from "@modules/cars/repositories/ISpecificationRepository";
import { CategoriesRepository } from "@modules/cars/infra/typeorm/repositories/CategoryRepository";
import { IUsersRepository } from "@modules/accounts/repositories/IUsersRepository";
import { ICategoriesRepository } from "@modules/cars/repositories/ICategoriesRepository";
import { UserRepository } from "@modules/accounts/infra/typeorm/repositories/UsersRepository";

container.registerSingleton<ICategoriesRepository>(
  "CategoriesRepository",
  CategoriesRepository
);
container.registerSingleton<ISpecificationRepository>(
  "SpecificationsRepository",
  SpecificationsRepository
);

container.registerSingleton<IUsersRepository>("UserRepository", UserRepository);
