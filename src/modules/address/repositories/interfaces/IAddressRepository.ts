import { ICreateAddressDTO } from "../../dtos/ICreateAddressDTO";
import { IUpdateAddressDTO } from "../../dtos/IUpdateAddressDTO";
import { Address } from "../../entities/Address";

interface IAddressRepository {

    create({ street, number, city, state, cep }: ICreateAddressDTO): Promise<Address>;

    list(): Promise<Address[]>;

    findById(id: string): Promise<Address>;

    update(id: string, { street, number, city, state, cep }: IUpdateAddressDTO): Promise<Address>;

    delete(id: string): Promise<Address>;
}

export { IAddressRepository };