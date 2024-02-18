import { Router } from "express";
import { CreateAthleteResponsibleController } from "../../modules/athleteResponsible/useCases/createAthleteResponsible/CreateAthleteResponsibleController";

const athleteResponsibleRoutes = Router();

let createAthleteResponsibleController = new CreateAthleteResponsibleController();

athleteResponsibleRoutes.post("/", createAthleteResponsibleController.handle);

export { athleteResponsibleRoutes };