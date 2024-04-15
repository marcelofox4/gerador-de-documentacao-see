import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import { IAthleteResponsibleRepository } from "../../../athletes/repositories/interfaces/IAthleteResposibleRepository";
import { IAddressRepository } from "../../../address/repositories/interfaces/IAddressRepository";

interface IRequest {
    name: string; 
    cpf: string; 
    rg: string;
    gender: string;
    email?: string; 
    phoneNumber: string;
    profession: string;
    maritalStatus: string;
    street: string; 
    number?: number;
    city: string;
    state: string;
    cep?: string;
}

@injectable()
class CreateAthleteResponsibleUseCase {

    constructor(
        @inject("AthleteResponsibleRepository")
        private athleteResponsibleRepository: IAthleteResponsibleRepository,
        @inject("AddressRepository")
        private addressRepository: IAddressRepository,
    ) {}

    async execute({ name, cpf, rg, gender, email, phoneNumber, profession, maritalStatus, street, number, city, state, cep }: IRequest): Promise<Object> {

        const athleteResponsibleAlreadyExists = await this.athleteResponsibleRepository.findByCpf(cpf);

        if (athleteResponsibleAlreadyExists) {
            throw new AppError("Athlete Responsible already exists!");
        }

        const address = await this.addressRepository.create({
            street, 
            number, 
            city, 
            state, 
            cep,
        });

        const athleteResponsible = await this.athleteResponsibleRepository.create({
            name, 
            cpf, 
            rg,
            gender,
            email, 
            phoneNumber, 
            profession, 
            maritalStatus,
            addressId: address.id,
        });

        return athleteResponsible;
    }
}

export { CreateAthleteResponsibleUseCase };