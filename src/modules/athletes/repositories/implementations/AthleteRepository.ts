import { Repository, getRepository } from "typeorm";
import { Athlete } from "../../entities/Athlete";
import { IAthleteRepository } from "../interfaces/IAthleteRepository";
import { ICreateAthleteDTO } from "../../dtos/ICreateAthleteDTO";

class AthleteRepository implements IAthleteRepository {
    
    private repository: Repository<Athlete>;

    constructor() {
        this.repository = getRepository(Athlete);
    }
    
    async create({ name, cpf, rg, email, phoneNumber, profession, maritalStatus, addressId, athleteResponsibleId }: ICreateAthleteDTO): Promise<Athlete> {
        
        const athleteResponsible = this.repository.create({
            name, 
            cpf, 
            rg, 
            email, 
            phoneNumber, 
            profession, 
            maritalStatus, 
            addressId,
            athleteResponsibleId,
        });

        await this.repository.save(athleteResponsible);

        return athleteResponsible;
    }

}

export { AthleteRepository };