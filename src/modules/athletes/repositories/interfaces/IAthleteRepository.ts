import { ICreateAthleteDTO } from "../../dtos/ICreateAthleteDTO";
import { Athlete } from "../../entities/Athlete";

interface IAthleteRepository {

    create({ name, cpf, rg, email, phoneNumber, profession, maritalStatus, addressId }: ICreateAthleteDTO): Promise<Athlete>;

}

export { IAthleteRepository };