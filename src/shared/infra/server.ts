import "reflect-metadata";
import express, { NextFunction, request, Request, Response } from "express";
import "express-async-errors";
import "@shared/container";

import createConnection from "./typeorm/index";

import { router } from "./http/routes";
import swaggerUi from "swagger-ui-express";
import swaggerFile from "../../swagger.json";
import { AppError } from "@shared/errors/AppError";

createConnection();

const app = express();

app.use(express.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use(router);

app.use(
  (err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof AppError) {
      return response.status(err.statusCode).json({
        message: err.message,
      });
    }
    return response.status(500).json({
      status: "Error",
      message: `Internal server error - ${err.message}`,
    });
  }
);

app.listen(3333, () => {
  console.log(" server is running!");
});
