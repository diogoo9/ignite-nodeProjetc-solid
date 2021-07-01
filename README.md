## S.O.L.I.D: Os 5 princípios da POO

- S — `Single Responsiblity Principle` (Princípio da responsabilidade única)
- O — `Open-Closed Principle` (Princípio Aberto-Fechado)
- L — `Liskov Substitution Principle` (Princípio da substituição de Liskov)
- I — `Interface Segregation Principle` (Princípio da Segregação da Interface)
- D — `Dependency Inversion Principle` (Princípio da inversão da dependência)

## Docker comands

- $ docker build
- $ docker ps
- $ docker-compose up
- $ docker-compose up -d
- $ docker logs IMAGE_NAME -f
- $ docker exec -it IMAGE_NAME /bin/bash
- $ docker-compose up --force-recreate
- $ docker exec database_ignite cat /etc/hosts #to see IPs

network_mode to work in too rede

## Singleton

usgin tsyringe
all injections configured in shared/container/index.ts

## Reduce depences link

config your tsconfig in

```json
"baseUrl": "./src",
    "paths": {
      "@modules/*": ["modules/*"],
      "@config/*": ["config/*"],
      "@shared/*": ["shared/*"],
      "@errors/*": ["errors/*"],
      "@utils/*": ["utils/*"]
    }
```

change imports

#####'src/modules/user/useCases/CreateUserUseCase.ts'
to
#####'@modules/user/useCases/CreateUserUseCase.ts'

and to finish install the

`$ yarn add tsconfig-path -D`

and in packge.json start script(dev) and typeorm add
`-r tsconfig-paths/register`

and in jest.config.ts config import
`import { pathsToModuleNameMapper } from "ts-jest/utils";`
`import { compilerOptions } from "./tsconfig.json";`

and set paths config

```typescript
moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
   prefix: "<rootDir>/src/",
 }),
```

## Responsabilidades

a aplicacao tem entities que dependem do typeorm
