import { Repository, getRepository } from "typeorm";
import { ICreateAddressDTO } from "../../dtos/ICreateAddressDTO";
import { IAddressRepository } from "../interfaces/IAddressRepository";
import { Address } from "../../entities/Address";

class AddressRepository implements IAddressRepository {
    
    private repository: Repository<Address>;

    constructor() {
        this.repository = getRepository(Address);
    }
    
    async create({ street, number, city, state, cep }: ICreateAddressDTO): Promise<Address> {
        
        const address = this.repository.create({
            street, 
            number, 
            city, 
            state, 
            cep
        });

        await this.repository.save(address);

        return address;
    }

    async list(): Promise<Address[]> {

        const adresses = await this.repository.find();

        return adresses;
    }

}

export { AddressRepository };