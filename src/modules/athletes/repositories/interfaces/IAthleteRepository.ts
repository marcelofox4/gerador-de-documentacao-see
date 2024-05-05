import { ICreateAthleteDTO } from "../../dtos/ICreateAthleteDTO";
import { Athlete } from "../../entities/Athlete";

interface IAthleteRepository {

    create({ name, cpf, rg, bornDate, email, phoneNumber, profession, maritalStatus, addressId, athleteResponsibleId }: ICreateAthleteDTO): Promise<Athlete>;

}

export { IAthleteRepository };