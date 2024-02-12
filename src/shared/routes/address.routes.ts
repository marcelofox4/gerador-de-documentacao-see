import { Router } from "express";
import { CreateAddressController } from "../../modules/address/useCases/createAddress/CreateAddressController";

const addressRoutes = Router();

let createAddressController = new CreateAddressController();

addressRoutes.post("/", createAddressController.handle);

export { addressRoutes };