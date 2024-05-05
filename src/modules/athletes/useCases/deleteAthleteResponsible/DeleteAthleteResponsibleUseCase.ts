import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import { IAthleteResponsibleRepository } from "../../../athletes/repositories/interfaces/IAthleteResposibleRepository";
import { IAddressRepository } from "../../../address/repositories/interfaces/IAddressRepository";

@injectable()
class DeleteAthleteResponsibleUseCase {

    constructor(
        @inject("AthleteResponsibleRepository")
        private athleteResponsibleRepository: IAthleteResponsibleRepository,
        @inject("AddressRepository")
        private addressRepository: IAddressRepository
    ) {}

    async execute(cpf: string): Promise<Object[]> {

        const athleteResponsibleAlreadyExists = await this.athleteResponsibleRepository.findByCpf(cpf);

        if (!athleteResponsibleAlreadyExists) {
            throw new AppError("Athlete responsible does not exists!");          
        }

        const addressDeleted = await this.addressRepository.delete(athleteResponsibleAlreadyExists.addressId);

        const athleteResponsibleDeleted = await this.athleteResponsibleRepository.delete(cpf);

        const array = [athleteResponsibleDeleted, addressDeleted];

        return array;
    }
}

export { DeleteAthleteResponsibleUseCase };