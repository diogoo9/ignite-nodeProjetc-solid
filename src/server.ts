import express, { Request, Response } from 'express';
import { categoriesRoutes } from './routes/categories.routes';

const app = express();

app.use(express.json())
app.use("/categories",categoriesRoutes)

app.get("/", (request: Request, response: Response) => {
    const { name } = request.body;
    response.send(name);
})

app.listen(3333, () => {
    console.log(" server is running!");
})