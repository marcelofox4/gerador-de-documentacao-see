import { Router } from "express";
import { CreateAthleteResponsibleController } from "../../modules/athleteResponsible/useCases/createAthleteResponsible/CreateAthleteResponsibleController";
import { ListAthleteResponsibleController } from "../../modules/athleteResponsible/useCases/listAthletesResponsible/ListAthleteResponsibleController";
import { FindAthleteResponsibleByCpfController } from "../../modules/athleteResponsible/useCases/findAthleteResponsibleByCpf/FindAthleteResponsibleByCpfController";
import { UpdateAthleteResponsibleController } from "../../modules/athleteResponsible/useCases/updateAthleteResponsible/UpdateAthleteResponsibleController";

const athleteResponsibleRoutes = Router();

let createAthleteResponsibleController = new CreateAthleteResponsibleController();
let listAthleteResponsibleController = new ListAthleteResponsibleController();
let findAthleteResponsibleByCpfController = new FindAthleteResponsibleByCpfController();
let updateAthleteResponsibleController = new UpdateAthleteResponsibleController();

athleteResponsibleRoutes.post("/", createAthleteResponsibleController.handle);

athleteResponsibleRoutes.get("/", listAthleteResponsibleController.handle);

athleteResponsibleRoutes.get("/:cpf", findAthleteResponsibleByCpfController.handle);

athleteResponsibleRoutes.put("/:cpf", updateAthleteResponsibleController.handle);

export { athleteResponsibleRoutes };