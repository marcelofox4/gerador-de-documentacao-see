import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import { AthleteResponsible } from "../../entities/AthleteResponsible";
import { IAthleteResponsibleRepository } from "../../../athletes/repositories/interfaces/IAthleteResposibleRepository";

@injectable()
class DeleteAthleteResponsibleUseCase {

    constructor(
        @inject("AthleteResponsibleRepository")
        private athleteResponsibleRepository: IAthleteResponsibleRepository
    ) {}

    async execute(cpf: string): Promise<AthleteResponsible> {

        const athleteResponsibleAlreadyExists = await this.athleteResponsibleRepository.findByCpf(cpf);

        if (!athleteResponsibleAlreadyExists) {
            throw new AppError("Athlete responsible does not exists!");          
        }

        const athleteResponsibleDeleted = await this.athleteResponsibleRepository.delete(cpf);

        return athleteResponsibleDeleted;
    }
}

export { DeleteAthleteResponsibleUseCase };