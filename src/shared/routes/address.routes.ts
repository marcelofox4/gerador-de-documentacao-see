import { Router } from "express";
import { CreateAddressController } from "../../modules/athletes/useCases/createAddress/CreateAddressController";
import { ListAddressesController } from "../../modules/athletes/useCases/listAddresses/ListAddressesController";
import { FindAddressByIdController } from "../../modules/athletes/useCases/findAddressById/FindAddressByIdController";
import { UpdateAddressController } from "../../modules/athletes/useCases/updateAddress/UpdateAddressController";
import { DeleteAddressController } from "../../modules/athletes/useCases/deleteAddress/DeleteAddressController";

const addressRoutes = Router();

let createAddressController = new CreateAddressController();
let listAddressesController = new ListAddressesController();
let findAddressByIdController = new FindAddressByIdController();
let updateAddressController = new UpdateAddressController();
let deleteAddressController = new DeleteAddressController();

addressRoutes.post("/", createAddressController.handle);

addressRoutes.get("/", listAddressesController.handle);

addressRoutes.get("/:id", findAddressByIdController.handle);

addressRoutes.put("/:id", updateAddressController.handle);

addressRoutes.delete("/:id", deleteAddressController.handle);

export { addressRoutes };