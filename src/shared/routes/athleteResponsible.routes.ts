import { Router } from "express";
import { CreateAthleteResponsibleController } from "../../modules/athletes/controllers/CreateAthleteResponsibleController";
import { ListAthleteResponsibleController } from "../../modules/athletes/useCases/listAthletesResponsible/ListAthleteResponsibleController";
import { FindAthleteResponsibleByCpfController } from "../../modules/athletes/useCases/findAthleteResponsibleByCpf/FindAthleteResponsibleByCpfController";
import { UpdateAthleteResponsibleController } from "../../modules/athletes/controllers/UpdateAthleteResponsibleController";
import { DeleteAthleteResponsibleController } from "../../modules/athletes/useCases/deleteAthleteResponsible/DeleteAthleteResponsibleController";

const athleteResponsibleRoutes = Router();

let createAthleteResponsibleController = new CreateAthleteResponsibleController();
let listAthleteResponsibleController = new ListAthleteResponsibleController();
let findAthleteResponsibleByCpfController = new FindAthleteResponsibleByCpfController();
let updateAthleteResponsibleController = new UpdateAthleteResponsibleController();
let deleteAthleteResponsibleController = new DeleteAthleteResponsibleController();

athleteResponsibleRoutes.post("/", createAthleteResponsibleController.handle);

athleteResponsibleRoutes.get("/", listAthleteResponsibleController.handle);

athleteResponsibleRoutes.get("/:cpf", findAthleteResponsibleByCpfController.handle);

athleteResponsibleRoutes.put("/:cpf", updateAthleteResponsibleController.handle);

athleteResponsibleRoutes.delete("/:cpf", deleteAthleteResponsibleController.handle);

export { athleteResponsibleRoutes };