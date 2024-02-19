import { inject, injectable } from "tsyringe";
import { AthleteResponsible } from "../../entities/AthleteResponsible";
import { IAthleteResponsibleRepository } from "../../../athletes/repositories/interfaces/IAthleteResposibleRepository";

@injectable()
class ListAthleteResponsibleUseCase {

    constructor(
        @inject("AthleteResponsibleRepository")
        private athleteResponsibleRepository: IAthleteResponsibleRepository
    ) {}

    async execute(): Promise<AthleteResponsible[]> {

        const athleteResponsibles = await this.athleteResponsibleRepository.list();

        return athleteResponsibles;
    }

}

export { ListAthleteResponsibleUseCase };