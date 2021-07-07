import { hash } from "bcrypt";
import createConnection from "../index";
import { v4 as uuid } from "uuid";

async function create() {
  const connection = await createConnection("localhost");

  const id = uuid();
  const password = await hash(`12345`, 8);

  await connection.query(
    `INSERT INTO users(id, name, email,password, is_admin, driver_license, created_at)
            VALUES('${id}', 'admin', 'admin@admin.com.br','${password}', true,'ABX-6985','now()')`
  );
  await connection.close();
}

create().then(() => console.log("Admin user created!"));
