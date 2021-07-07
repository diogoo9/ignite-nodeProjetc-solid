import { Connection, createConnection, getConnectionOptions } from "typeorm";

export default async (host = "database"): Promise<Connection> => {
  const connectionsOptions = await getConnectionOptions();

  return createConnection(
    Object.assign(connectionsOptions, {
      host: host,
    })
  );
};
