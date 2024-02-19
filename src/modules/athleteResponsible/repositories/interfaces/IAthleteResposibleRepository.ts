
import { ICreateAthleteResponsibleDTO } from "../../dtos/ICreateAthleteResponsibleDTO";
import { IUpdateAthleteResponsibleDTO } from "../../dtos/IUpdateAthleteResponsibleDTO";
import { AthleteResponsible } from "../../entities/AthleteResponsible";

interface IAthleteResponsibleRepository {

    create({ name, cpf, rg, email, phoneNumber, profession, maritalStatus, addressId }: ICreateAthleteResponsibleDTO): Promise<AthleteResponsible>;

    findByCpf(cpf: string): Promise<AthleteResponsible>;

    list(): Promise<AthleteResponsible[]>;

    update(cpf: string, { email, phoneNumber, profession, maritalStatus, addressId }: IUpdateAthleteResponsibleDTO): Promise<AthleteResponsible>;
}

export { IAthleteResponsibleRepository };