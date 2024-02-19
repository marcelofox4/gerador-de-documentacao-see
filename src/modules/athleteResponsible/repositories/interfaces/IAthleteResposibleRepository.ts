import { ICreateAthleteResponsibleDTO } from "../../dtos/ICreateAthleteResponsibleDTO";
import { AthleteResponsible } from "../../entities/AthleteResponsible";

interface IAthleteResponsibleRepository {

    create({ name, cpf, rg, email, phoneNumber, profession, maritalStatus, addressId }: ICreateAthleteResponsibleDTO): Promise<AthleteResponsible>;

    findByCpf(cpf: string): Promise<AthleteResponsible>;

    list(): Promise<AthleteResponsible[]>;
}

export { IAthleteResponsibleRepository };