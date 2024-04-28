import { Router } from "express";
import { athleteResponsibleRoutes } from "./athleteResponsible.routes";

const router = Router();

router.use("/athleteResponsible", athleteResponsibleRoutes);

export { router };