import { Connection, createConnection, getConnectionOptions } from "typeorm";

export default async (host = "database"): Promise<Connection> => {
  const connectionsOptions = await getConnectionOptions();

  return createConnection(
    Object.assign(connectionsOptions, {
      host: process.env.NODE_ENV === "test" ? "localhost" : host,
      database:
        process.env.NODE_ENV === "test"
          ? "rentx_test"
          : connectionsOptions.database,
    })
  );
};
