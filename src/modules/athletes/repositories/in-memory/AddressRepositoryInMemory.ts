import { ICreateAddressDTO } from "../../dtos/ICreateAddressDTO";
import { IUpdateAddressDTO } from "../../dtos/IUpdateAddressDTO";
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

    async findById(id: string): Promise<Address> {
        
        const address = this.adresses.find((address) => address.id == id);

        return address;
    }

    async update(id: string, { street, number, city, state, cep }: IUpdateAddressDTO): Promise<Address> {
        
        const address = this.adresses.find((address) => address.id == id);

        if (address) {
            address.street = street ? street : address.street;
            address.number = number ? number : address.number;
            address.city = city ? city : address.city;
            address.state = state ? state : address.state;
            address.cep = cep ? cep : address.cep;
            address.update_at = new Date();

            return address;
        }
    }

    async delete(id: string): Promise<Address> {

        const address = this.adresses.find((address) => address.id == id);

        if (address) {
            const addressIndex = this.adresses.findIndex((address) => address.id == id);
            this.adresses.splice(addressIndex, 1);
            return address;
        }
    }
    
}

export { AddressRepositoryInMemory };