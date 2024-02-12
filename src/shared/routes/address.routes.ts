import { Router } from "express";
import { CreateAddressController } from "../../modules/address/useCases/createAddress/CreateAddressController";
import { ListAddressesController } from "../../modules/address/useCases/listAddresses/ListAddressesController";

const addressRoutes = Router();

let createAddressController = new CreateAddressController();
let listAddressesController = new ListAddressesController();

addressRoutes.post("/", createAddressController.handle);

addressRoutes.get("/", listAddressesController.handle);

export { addressRoutes };