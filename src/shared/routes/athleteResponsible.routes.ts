import { Router } from "express";
import { CreateAthleteResponsibleController } from "../../modules/athleteResponsible/useCases/createAthleteResponsible/CreateAthleteResponsibleController";
import { ListAthleteResponsibleController } from "../../modules/athleteResponsible/useCases/listAthletesResponsible/ListAthleteResponsibleController";
import { FindAthleteResponsibleByCpfController } from "../../modules/athleteResponsible/useCases/findAthleteResponsibleByCpf/FindAthleteResponsibleByCpfController";

const athleteResponsibleRoutes = Router();

let createAthleteResponsibleController = new CreateAthleteResponsibleController();
let listAthleteResponsibleController = new ListAthleteResponsibleController();
let findAthleteResponsibleByCpfController = new FindAthleteResponsibleByCpfController();

athleteResponsibleRoutes.post("/", createAthleteResponsibleController.handle);

athleteResponsibleRoutes.get("/", listAthleteResponsibleController.handle);

athleteResponsibleRoutes.get("/:cpf", findAthleteResponsibleByCpfController.handle);

export { athleteResponsibleRoutes };