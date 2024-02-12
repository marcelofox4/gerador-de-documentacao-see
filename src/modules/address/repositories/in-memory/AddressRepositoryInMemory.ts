import { ICreateAddressDTO } from "../../dtos/ICreateAddressDTO";
import { Address } from "../../entities/Address";
import { IAddressRepository } from "../interfaces/IAddressRepository";

class AddressRepositoryInMemory implements IAddressRepository {
    
    adresses: Address[] = [];

    async create({ street, number, city, state, cep }: ICreateAddressDTO): Promise<Address> {
        
        const address = new Address();

        Object.assign(address, {
            street, 
            number, 
            city, 
            state, 
            cep,
        });

        this.adresses.push(address);

        return address;
    }

    async list(): Promise<Address[]> {

        return this.adresses;
    }

}

export { AddressRepositoryInMemory };