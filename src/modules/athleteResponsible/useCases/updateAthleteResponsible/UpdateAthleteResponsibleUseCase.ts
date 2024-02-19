import { AppError } from "../../../../shared/errors/AppError";
import { IUpdateAthleteResponsibleDTO } from "../../dtos/IUpdateAthleteResponsibleDTO";
import { AthleteResponsible } from "../../entities/AthleteResponsible";
import { IAthleteResponsibleRepository } from "../../repositories/interfaces/IAthleteResposibleRepository";

class UpdateAthleteResponsibleUseCase {

    constructor(
        private athleteResponsibleRepository: IAthleteResponsibleRepository
    ) {}

    async execute(cpf: string, { email, phoneNumber, profession, maritalStatus, addressId }: IUpdateAthleteResponsibleDTO): Promise<AthleteResponsible> {

        const athleteResponsibleAlreadyExists = await this.athleteResponsibleRepository.findByCpf(cpf);

        if (!athleteResponsibleAlreadyExists) {
            throw new AppError("Athlete responsible does not exists!");
        }

        const athleteResponsibleUpdated = await this.athleteResponsibleRepository.update(cpf, {
            email, 
            phoneNumber, 
            profession, 
            maritalStatus, 
            addressId,
        });

        return athleteResponsibleUpdated;
    }
}

export { UpdateAthleteResponsibleUseCase };