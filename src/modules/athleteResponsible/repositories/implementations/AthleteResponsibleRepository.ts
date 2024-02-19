import { Repository, getRepository } from "typeorm";
import { ICreateAthleteResponsibleDTO } from "../../dtos/ICreateAthleteResponsibleDTO";
import { AthleteResponsible } from "../../entities/AthleteResponsible";
import { IAthleteResponsibleRepository } from "../interfaces/IAthleteResposibleRepository";

class AthleteResponsibleRepository implements IAthleteResponsibleRepository {
    
    private repository: Repository<AthleteResponsible>;

    constructor() {
        this.repository = getRepository(AthleteResponsible);
    }
    
    async create({ name, cpf, rg, email, phoneNumber, profession, maritalStatus, addressId }: ICreateAthleteResponsibleDTO): Promise<AthleteResponsible> {
        
        const athleteResponsible = this.repository.create({
            name, 
            cpf, 
            rg, 
            email, 
            phoneNumber, 
            profession, 
            maritalStatus, 
            addressId,
        });

        await this.repository.save(athleteResponsible);

        return athleteResponsible;
    }

    async findByCpf(cpf: string): Promise<AthleteResponsible> {
        
        return await this.repository.findOne({ where: { cpf } });
    }

    async list(): Promise<AthleteResponsible[]> {
        
        const athleteResponsibles = await this.repository.find();

        return athleteResponsibles;
    }

}

export { AthleteResponsibleRepository };