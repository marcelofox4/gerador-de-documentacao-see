import { inject, injectable } from "tsyringe";
import { ICreateAddressDTO } from "../../../address/dtos/ICreateAddressDTO";
import { IAddressRepository } from "../../../address/repositories/interfaces/IAddressRepository";
import { Address } from "../../entities/Address";

@injectable()
class CreateAddressUseCase {

    constructor(
        @inject("AddressRepository")
        private addressRepository: IAddressRepository
    ) {}

    async execute({ street, number, city, state, cep }: ICreateAddressDTO): Promise<Address> {

        const addressCreated = await this.addressRepository.create({
            street, 
            number, 
            city, 
            state, 
            cep
        });

        return addressCreated;
    }
}

export { CreateAddressUseCase };