import { container } from "tsyringe";

import { IAddressRepository } from "../../modules/address/repositories/interfaces/IAddressRepository";
import { AddressRepository } from "../../modules/address/repositories/implementations/AddressRepository";

import { IAthleteResponsibleRepository } from "../../modules/athletes/repositories/interfaces/IAthleteResposibleRepository";
import { AthleteResponsibleRepository } from "../../modules/athletes/repositories/implementations/AthleteResponsibleRepository";

import { IAthleteRepository } from "../../modules/athletes/repositories/interfaces/IAthleteRepository";
import { AthleteRepository } from "../../modules/athletes/repositories/implementations/AthleteRepository";


container.registerSingleton<IAddressRepository>(
    "AddressRepository",
    AddressRepository,
);

container.registerSingleton<IAthleteResponsibleRepository>(
    "AthleteResponsibleRepository",
    AthleteResponsibleRepository,
);

container.registerSingleton<IAthleteRepository>(
    "AthleteRepository",
    AthleteRepository,
);