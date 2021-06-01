import express, { Request, Response } from 'express';
import { router } from './routes';
import swaggerUi from "swagger-ui-express";
import swaggerFile from './swagger.json';

const app = express();

app.use(express.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use(router);

app.get("/", (request: Request, response: Response) => {
    const { name } = request.body;
    response.send(name);
})

app.listen(3333, () => {
    console.log(" server is running!");
})