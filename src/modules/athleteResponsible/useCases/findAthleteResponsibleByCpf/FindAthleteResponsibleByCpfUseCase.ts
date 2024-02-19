import { AppError } from "../../../../shared/errors/AppError";
import { AthleteResponsible } from "../../entities/AthleteResponsible";
import { IAthleteResponsibleRepository } from "../../repositories/interfaces/IAthleteResposibleRepository";

class FindAthleteResponsibleByCpfUseCase {

    constructor(
        private athleteResponsibleRepository: IAthleteResponsibleRepository
    ) {}

    async execute(cpf: string): Promise<AthleteResponsible> {

        const athleteResponsibleAlreadyExists = await this.athleteResponsibleRepository.findByCpf(cpf);

        if (!athleteResponsibleAlreadyExists) {
            throw new AppError("Athlete responsible does not exists!");
        }

        return athleteResponsibleAlreadyExists;
    }

}

export { FindAthleteResponsibleByCpfUseCase };