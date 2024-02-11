import "reflect-metadata"
import express, { Request, Response, NextFunction } from 'express';
import  { createConnection }  from "typeorm";

import swaggerUi from "swagger-ui-express";
import swaggerFile from "./swagger.json";

createConnection();

const app = express();
const port = 3333;

app.use(express.json());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.listen(port, () => console.log(`Server is running in port: ${port}!`));