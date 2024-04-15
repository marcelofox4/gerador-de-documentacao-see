import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";

import { AthleteResponsible } from "../../entities/AthleteResponsible";
import { IAthleteResponsibleRepository } from "../../../athletes/repositories/interfaces/IAthleteResposibleRepository";
import { IAddressRepository } from "../../../address/repositories/interfaces/IAddressRepository";

interface IRequest {
    email?: string; 
    phoneNumber?: string;
    profession?: string;
    maritalStatus?: string;
    street?: string; 
    number?: number;
    city?: string;
    state?: string;
    cep?: string;
}

@injectable()
class UpdateAthleteResponsibleUseCase {

    constructor(
        @inject("AthleteResponsibleRepository")
        private athleteResponsibleRepository: IAthleteResponsibleRepository,
        @inject("AddressRepository")
        private addressRepository: IAddressRepository,
    ) {}

    async execute(cpf: string, { email, phoneNumber, profession, maritalStatus, street, number, city, state, cep }: IRequest): Promise<AthleteResponsible> {

        const athleteResponsibleAlreadyExists = await this.athleteResponsibleRepository.findByCpf(cpf);

        if (!athleteResponsibleAlreadyExists) {
            throw new AppError("Athlete responsible does not exists!");
        }

        const addressId = athleteResponsibleAlreadyExists.addressId;

        await this.addressRepository.update(addressId, {
            street, 
            number, 
            city, 
            state, 
            cep,
        });

        const athleteResponsibleUpdated = await this.athleteResponsibleRepository.update(cpf, {
            email, 
            phoneNumber, 
            profession, 
            maritalStatus,
        });

        return athleteResponsibleUpdated;
    }
}

export { UpdateAthleteResponsibleUseCase };