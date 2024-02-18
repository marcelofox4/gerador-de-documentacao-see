import { ICreateAthleteResponsibleDTO } from "../../dtos/ICreateAthleteResponsibleDTO";
import { AthleteResponsible } from "../../entities/AthleteResponsible";
import { IAthleteResponsibleRepository } from "../interfaces/IAthleteResposibleRepository";

class AthleteResponsibleRepositoryInMemory implements IAthleteResponsibleRepository {
    
    athleteResponsibles: AthleteResponsible[] = [];
    
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

        this.athleteResponsibles.push(athleteResponsible);

        return athleteResponsible;
    }

    async findByCpf(cpf: string): Promise<AthleteResponsible> {

        const athleteResponsible = this.athleteResponsibles.find((athleteResponsible) => athleteResponsible.cpf == cpf);

        return athleteResponsible;
    }

}

export { AthleteResponsibleRepositoryInMemory };