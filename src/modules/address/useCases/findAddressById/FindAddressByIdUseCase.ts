import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import { Address } from "../../entities/Address";
import { IAddressRepository } from "../../repositories/interfaces/IAddressRepository";

@injectable()
class FindAddressByIdUseCase {

    constructor(
        @inject("AddressRepository")
        private addressRepository: IAddressRepository
    ) {}

    async execute(id: string): Promise<Address> {

        const addressAlreadyExists = await this.addressRepository.findById(id);

        if (!addressAlreadyExists) {
            throw new AppError("Address do not exists!");
            
        }

        return addressAlreadyExists;
    }
}

export { FindAddressByIdUseCase };