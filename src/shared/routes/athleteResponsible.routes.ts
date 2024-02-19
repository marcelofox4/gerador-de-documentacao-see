import { Router } from "express";
import { CreateAthleteResponsibleController } from "../../modules/athleteResponsible/useCases/createAthleteResponsible/CreateAthleteResponsibleController";
import { ListAthleteResponsibleController } from "../../modules/athleteResponsible/useCases/listAthletesResponsible/ListAthleteResponsibleController";

const athleteResponsibleRoutes = Router();

let createAthleteResponsibleController = new CreateAthleteResponsibleController();
let listAthleteResponsibleController = new ListAthleteResponsibleController();

athleteResponsibleRoutes.post("/", createAthleteResponsibleController.handle);

athleteResponsibleRoutes.get("/", listAthleteResponsibleController.handle);

export { athleteResponsibleRoutes };