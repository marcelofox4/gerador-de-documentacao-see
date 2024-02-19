import { Repository, getRepository } from "typeorm";
import { ICreateAddressDTO } from "../../dtos/ICreateAddressDTO";
import { IAddressRepository } from "../interfaces/IAddressRepository";
import { Address } from "../../entities/Address";
import { IUpdateAddressDTO } from "../../dtos/IUpdateAddressDTO";

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

    async findById(id: string): Promise<Address> {
        
        return await this.repository.findOne({ where: { id } });
    }

    async update(id: string, { street, number, city, state, cep }: IUpdateAddressDTO): Promise<Address> {
        
        const address = await this.repository.findOne({ where: { id } });
        
        if (address) {
            address.street = street ? street : address.street;
            address.number = number ? number : address.number;
            address.city = city ? city : address.city;
            address.state = state ? state : address.state;
            address.cep = cep ? cep : address.cep;
            address.update_at = new Date();

            await this.repository.save(address);
        }

        return address;
    }

    async delete(id: string): Promise<Address> {
        const address = await this.repository.findOne({ where: { id } });

        if (address) {
            await this.repository.remove(address);
            return address;
        }
    }

}

export { AddressRepository };