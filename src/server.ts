import "reflect-metadata"
import express, { Request, Response, NextFunction } from 'express';
import  { createConnection }  from "typeorm";

createConnection();

const app = express();
const port = 3333;

app.use(express.json());

app.listen(port, () => console.log(`Server is running in port: ${port}!`));