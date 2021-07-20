import { app } from "@shared/infra/app";
import { hash } from "bcrypt";
import request from "supertest";
import { Connection, createConnection } from "typeorm";
import { v4 as uuidV4 } from "uuid";

let connection: Connection;
describe("List Category Controller", () => {
  beforeAll(async () => {
    connection = await createConnection();
    await connection.runMigrations();
    const id = uuidV4();
    const password = await hash("admin", 8);
    const a = await connection.query(
      `INSERT INTO users(id, name, email,password, is_admin, driver_license, created_at)
              VALUES('${id}', 'admin', 'admin@admin.com.br','${password}', true,'ABX-6985','now()')`
    );
  });

  afterAll(async () => {
    await connection.dropDatabase();
    await connection.close();
  });

  it("should be able to list all categories", async () => {
    const responseToken = await request(app).post("/sessions").send({
      email: "admin@admin.com.br",
      password: "admin",
    });

    const { token } = responseToken.body;
    await request(app)
      .post("/categories")
      .send({
        name: "Category supertest1",
        description: "Category supertest1",
      })
      .set({
        Authorization: `Bearer ${token}`,
      });

    const response = await request(app).get("/categories");

    expect(response.status).toBe(200);
    expect(response.body.length).toBe(1);
  });
});
