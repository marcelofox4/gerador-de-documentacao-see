import { ICreateAthleteDTO } from "../../dtos/ICreateAthleteDTO";
import { Athlete } from "../../entities/Athlete";
import { IAthleteRepository } from "../interfaces/IAthleteRepository";


class AthleteRepositoryInMemory implements IAthleteRepository { 
    
    athletes: Athlete[] = [];
    
    async create({ name, cpf, rg, bornDate, email, phoneNumber, profession, maritalStatus, addressId, athleteResponsibleId }: ICreateAthleteDTO): Promise<Athlete> {

        const athlete = new Athlete();

        Object.assign(athlete, {
            name,
            cpf,
            rg,
            bornDate,
            email,
            phoneNumber,
            profession,
            maritalStatus,
            addressId,
            athleteResponsibleId,
        });

        this.athletes.push(athlete);

        return athlete;
    }

}

export { AthleteRepositoryInMemory };