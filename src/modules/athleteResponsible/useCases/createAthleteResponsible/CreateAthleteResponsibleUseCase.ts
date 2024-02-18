import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import { ICreateAthleteResponsibleDTO } from "../../dtos/ICreateAthleteResponsibleDTO";
import { AthleteResponsible } from "../../entities/AthleteResponsible";
import { IAthleteResponsibleRepository } from "../../repositories/interfaces/IAthleteResposibleRepository";

@injectable()
class CreateAthleteResponsibleUseCase {

    constructor(
        @inject("AthleteResponsibleRepository")
        private athleteResponsibleRepository: IAthleteResponsibleRepository,
    ) {}

    async execute({ name, cpf, rg, email, phoneNumber, profession, maritalStatus, addressId }: ICreateAthleteResponsibleDTO): Promise<AthleteResponsible> {

        const athleteResponsibleAlreadyExists = await this.athleteResponsibleRepository.findByCpf(cpf);

        if (athleteResponsibleAlreadyExists) {
            throw new AppError("Athlete Responsible already exists!");
        }

        const athleteResponsible = await this.athleteResponsibleRepository.create({
            name, 
            cpf, 
            rg, 
            email, 
            phoneNumber, 
            profession, 
            maritalStatus,
            addressId,
        });

        return athleteResponsible;
    }
}

export { CreateAthleteResponsibleUseCase };