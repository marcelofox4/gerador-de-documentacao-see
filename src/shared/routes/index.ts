import { Router } from "express";
import { addressRoutes } from "./address.routes";

const router = Router();

router.use("/address", addressRoutes);

export { router };