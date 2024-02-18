import { ICreateAthleteResponsibleDTO } from "../../dtos/ICreateAthleteResponsibleDTO";
import { AthleteResponsible } from "../../entities/AthleteResponsible";

interface IAthleteResponsibleRepository {

    create({ name, cpf, rg, email, phoneNumber, profession, maritalStatus, addressId }: ICreateAthleteResponsibleDTO): Promise<AthleteResponsible>;
}

export { IAthleteResponsibleRepository };