import { Router } from "express";
import { CreateAddressController } from "../../modules/address/useCases/createAddress/CreateAddressController";
import { ListAdressesController } from "../../modules/address/useCases/listAdresses/ListAdressesController";

const addressRoutes = Router();

let createAddressController = new CreateAddressController();
let listAdressesController = new ListAdressesController();

addressRoutes.post("/", createAddressController.handle);

addressRoutes.get("/", listAdressesController.handle);

export { addressRoutes };