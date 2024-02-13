import { Router } from "express";

import { CreateAddressController } from "../../modules/address/useCases/createAddress/CreateAddressController";
import { ListAddressesController } from "../../modules/address/useCases/listAddresses/ListAddressesController";
import { UpdateAddressController } from "../../modules/address/useCases/updateAddress/UpdateAddressController";

const addressRoutes = Router();

let createAddressController = new CreateAddressController();
let listAddressesController = new ListAddressesController();
let updateAddressController = new UpdateAddressController();

addressRoutes.post("/", createAddressController.handle);

addressRoutes.get("/", listAddressesController.handle);

addressRoutes.put("/:id", updateAddressController.handle);

export { addressRoutes };