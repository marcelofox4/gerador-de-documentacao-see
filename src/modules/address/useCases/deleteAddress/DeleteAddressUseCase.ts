import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import { Address } from "../../entities/Address";
import { IAddressRepository } from "../../repositories/interfaces/IAddressRepository";

@injectable()
class DeleteAddressUseCase {

    constructor(
        @inject("AddressRepository")
        private addressRepository: IAddressRepository
    ) {}

    async execute(id: string): Promise<Address> {

        const addressAlreadyExists = await this.addressRepository.findById(id);

        if (!addressAlreadyExists) {
            throw new AppError("Address do not exists!");
        }

        const address = await this.addressRepository.delete(id);

        return address;
    }

}

export { DeleteAddressUseCase };