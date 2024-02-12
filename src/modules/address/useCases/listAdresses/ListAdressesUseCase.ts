import { inject, injectable } from "tsyringe";
import { IAddressRepository } from "../../repositories/interfaces/IAddressRepository";
import { Address } from "../../entities/Address";

@injectable()
class ListAdressesUseCase {

    constructor(
        @inject("AddressRepository")
        private addressRepository: IAddressRepository
    ) {}

    async execute(): Promise<Address[]> {

        const adresses = await this.addressRepository.list();

        return adresses;
    }

}

export { ListAdressesUseCase };