import { inject, injectable } from "tsyringe";
import { ICreateAddressDTO } from "../../../address/dtos/ICreateAddressDTO";
import { IAddressRepository } from "../../../address/repositories/interfaces/IAddressRepository";

@injectable()
class CreateAddressUseCase {

    constructor(
        @inject("AddressRepository")
        private addressRepository: IAddressRepository
    ) {}

    async execute({ street, number, city, state, cep }: ICreateAddressDTO): Promise<void> {

        await this.addressRepository.create({
            street, 
            number, 
            city, 
            state, 
            cep
        });
    }
}

export { CreateAddressUseCase };