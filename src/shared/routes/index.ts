import { Router } from "express";
import { addressRoutes } from "./address.routes";
import { athleteResponsibleRoutes } from "./athleteResponsible.routes";

const router = Router();

router.use("/address", addressRoutes);
router.use("/athleteResponsible", athleteResponsibleRoutes);

export { router };