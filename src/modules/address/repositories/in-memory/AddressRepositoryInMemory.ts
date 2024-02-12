import { ICreateAddressDTO } from "../../dtos/ICreateAddressDTO";
import { Address } from "../../entities/Address";
import { IAddressRepository } from "../interfaces/IAddressRepository";

class AddressRepositoryInMemory implements IAddressRepository {
    
    adresses: Address[] = [];

    async create({ street, number, city, state, cep }: ICreateAddressDTO): Promise<void> {
        
        const address = new Address();

        Object.assign(address, {
            street, 
            number, 
            city, 
            state, 
            cep,
        });

        this.adresses.push(address);
    }

}

export { AddressRepositoryInMemory };