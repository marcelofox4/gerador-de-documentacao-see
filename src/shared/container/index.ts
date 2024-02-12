import { container } from "tsyringe";

import { IAddressRepository } from "../../modules/address/repositories/interfaces/IAddressRepository";
import { AddressRepository } from "../../modules/address/repositories/implementations/AddressRepository";

container.registerSingleton<IAddressRepository>(
    "AddressRepository",
    AddressRepository
)