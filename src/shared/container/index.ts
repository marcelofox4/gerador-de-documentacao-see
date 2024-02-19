import { container } from "tsyringe";

import { IAddressRepository } from "../../modules/athletes/repositories/interfaces/IAddressRepository";
import { AddressRepository } from "../../modules/athletes/repositories/implementations/AddressRepository";

import { IAthleteResponsibleRepository } from "../../modules/athletes/repositories/interfaces/IAthleteResposibleRepository";
import { AthleteResponsibleRepository } from "../../modules/athletes/repositories/implementations/AthleteResponsibleRepository";


container.registerSingleton<IAddressRepository>(
    "AddressRepository",
    AddressRepository,
);

container.registerSingleton<IAthleteResponsibleRepository>(
    "AthleteResponsibleRepository",
    AthleteResponsibleRepository,
);