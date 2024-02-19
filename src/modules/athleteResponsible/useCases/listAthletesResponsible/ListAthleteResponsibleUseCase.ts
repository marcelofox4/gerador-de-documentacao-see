import { AthleteResponsible } from "../../entities/AthleteResponsible";
import { IAthleteResponsibleRepository } from "../../repositories/interfaces/IAthleteResposibleRepository";

class ListAthleteResponsibleUseCase {

    constructor(
        private athleteResponsibleRepository: IAthleteResponsibleRepository
    ) {}

    async execute(): Promise<AthleteResponsible[]> {

        const athleteResponsibles = await this.athleteResponsibleRepository.list();

        return athleteResponsibles;
    }

}

export { ListAthleteResponsibleUseCase };