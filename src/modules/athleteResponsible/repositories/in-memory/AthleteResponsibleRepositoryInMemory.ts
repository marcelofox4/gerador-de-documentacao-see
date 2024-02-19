import { ICreateAthleteResponsibleDTO } from "../../dtos/ICreateAthleteResponsibleDTO";
import { IUpdateAthleteResponsibleDTO } from "../../dtos/IUpdateAthleteResponsibleDTO";
import { AthleteResponsible } from "../../entities/AthleteResponsible";
import { IAthleteResponsibleRepository } from "../interfaces/IAthleteResposibleRepository";

class AthleteResponsibleRepositoryInMemory implements IAthleteResponsibleRepository { 
    
    athletesResponsible: AthleteResponsible[] = [];
    
    async create({ name, cpf, rg, email, phoneNumber, profession, maritalStatus, addressId }: ICreateAthleteResponsibleDTO): Promise<AthleteResponsible> {

        const athleteResponsible = new AthleteResponsible();

        Object.assign(athleteResponsible, {
            name,
            cpf,
            rg,
            email,
            phoneNumber,
            profession,
            maritalStatus,
            addressId,
        });

        this.athletesResponsible.push(athleteResponsible);

        return athleteResponsible;
    }

    async findByCpf(cpf: string): Promise<AthleteResponsible> {

        const athleteResponsible = this.athletesResponsible.find((athleteResponsible) => athleteResponsible.cpf == cpf);

        return athleteResponsible;
    }

    async list(): Promise<AthleteResponsible[]> {
        
        return this.athletesResponsible;
    }

    async update(cpf: string, { email, phoneNumber, profession, maritalStatus, addressId }: IUpdateAthleteResponsibleDTO): Promise<AthleteResponsible> {
        
        const athleteResponsible = this.athletesResponsible.find((athleteResponsible) => athleteResponsible.cpf == cpf);

        if (athleteResponsible) {
            athleteResponsible.email = email ? email : athleteResponsible.email;
            athleteResponsible.phoneNumber = phoneNumber ? phoneNumber : athleteResponsible.phoneNumber;
            athleteResponsible.profession = profession ? profession : athleteResponsible.profession;
            athleteResponsible.maritalStatus = maritalStatus ? maritalStatus : athleteResponsible.maritalStatus;
            athleteResponsible.addressId = addressId ? addressId : athleteResponsible.addressId;
            athleteResponsible.update_at = new Date();

            return athleteResponsible;
        }
    }

}

export { AthleteResponsibleRepositoryInMemory };