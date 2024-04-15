import { Router } from "express";

import { ListAddressesController } from "../../modules/address/useCases/listAddresses/ListAddressesController";
import { FindAddressByIdController } from "../../modules/address/useCases/findAddressById/FindAddressByIdController";

const addressRoutes = Router();

let listAddressesController = new ListAddressesController();
let findAddressByIdController = new FindAddressByIdController();

addressRoutes.get("/", listAddressesController.handle);

addressRoutes.get("/:id", findAddressByIdController.handle);

export { addressRoutes };