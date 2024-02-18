import { Router } from "express";

import { CreateAddressController } from "../../modules/address/useCases/createAddress/CreateAddressController";
import { ListAddressesController } from "../../modules/address/useCases/listAddresses/ListAddressesController";
import { UpdateAddressController } from "../../modules/address/useCases/updateAddress/UpdateAddressController";
import { DeleteAddressController } from "../../modules/address/useCases/deleteAddress/DeleteAddressController";

const addressRoutes = Router();

let createAddressController = new CreateAddressController();
let listAddressesController = new ListAddressesController();
let updateAddressController = new UpdateAddressController();
let deleteAddressController = new DeleteAddressController();

addressRoutes.post("/", createAddressController.handle);

addressRoutes.get("/", listAddressesController.handle);

addressRoutes.put("/:id", updateAddressController.handle);

addressRoutes.delete("/:id", deleteAddressController.handle);

export { addressRoutes };