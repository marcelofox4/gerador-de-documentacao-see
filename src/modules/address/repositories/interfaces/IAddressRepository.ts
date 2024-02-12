import { ICreateAddressDTO } from "../../dtos/ICreateAddressDTO";

interface IAddressRepository {

    create({ street, number, city, state, cep }: ICreateAddressDTO): Promise<void>;
}

export { IAddressRepository };