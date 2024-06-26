import { Repository, getRepository } from "typeorm";
import { ICreateAthleteResponsibleDTO } from "../../dtos/ICreateAthleteResponsibleDTO";
import { AthleteResponsible } from "../../entities/AthleteResponsible";
import { IAthleteResponsibleRepository } from "../interfaces/IAthleteResposibleRepository";
import { IUpdateAthleteResponsibleDTO } from "../../dtos/IUpdateAthleteResponsibleDTO";

class AthleteResponsibleRepository implements IAthleteResponsibleRepository {
    
    private repository: Repository<AthleteResponsible>;

    constructor() {
        this.repository = getRepository(AthleteResponsible);
    }
    
    async create({ name, cpf, rg, gender, email, phoneNumber, profession, maritalStatus, addressId }: ICreateAthleteResponsibleDTO): Promise<AthleteResponsible> {
        
        const athleteResponsible = this.repository.create({
            name, 
            cpf, 
            rg,
            gender,
            email, 
            phoneNumber, 
            profession, 
            maritalStatus,
            status: true,
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

    async update(cpf: string, { email, phoneNumber, profession, maritalStatus }: IUpdateAthleteResponsibleDTO): Promise<AthleteResponsible> {
        
        const athleteResponsible = await this.repository.findOne({ where: { cpf } });

        if (athleteResponsible) {
            athleteResponsible.email = email ? email : athleteResponsible.email;
            athleteResponsible.phoneNumber = phoneNumber ? phoneNumber : athleteResponsible.phoneNumber;
            athleteResponsible.profession = profession ? profession : athleteResponsible.profession;
            athleteResponsible.maritalStatus = maritalStatus ? maritalStatus : athleteResponsible.maritalStatus;
            athleteResponsible.update_at = new Date();

            await this.repository.save(athleteResponsible);
        }

        return athleteResponsible;
    }

    async delete(cpf: string): Promise<AthleteResponsible> {
        
        const athleteResponsible = await this.repository.findOne({ where: { cpf } });

        if (athleteResponsible) {

            await this.repository.remove(athleteResponsible);
            
            return athleteResponsible;
        }
    }

}

export { AthleteResponsibleRepository };