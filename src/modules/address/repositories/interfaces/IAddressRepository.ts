import { ICreateAddressDTO } from "../../dtos/ICreateAddressDTO";
import { Address } from "../../entities/Address";

interface IAddressRepository {

    create({ street, number, city, state, cep }: ICreateAddressDTO): Promise<Address>;

    list(): Promise<Address[]>;
}

export { IAddressRepository };