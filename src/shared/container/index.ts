import { container } from "tsyringe";

import { IAddressRepository } from "../../modules/address/repositories/interfaces/IAddressRepository";
import { AddressRepository } from "../../modules/address/repositories/implementations/AddressRepository";

import { IAthleteResponsibleRepository } from "../../modules/athleteResponsible/repositories/interfaces/IAthleteResposibleRepository";
import { AthleteResponsibleRepository } from "../../modules/athleteResponsible/repositories/implementations/AthleteResponsibleRepository";


container.registerSingleton<IAddressRepository>(
    "AddressRepository",
    AddressRepository,
);

container.registerSingleton<IAthleteResponsibleRepository>(
    "AthleteResponsibleRepository",
    AthleteResponsibleRepository,
);