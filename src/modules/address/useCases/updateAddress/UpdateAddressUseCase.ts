import { inject, injectable } from "tsyringe";
import { IAddressRepository } from "../../repositories/interfaces/IAddressRepository";
import { IUpdateAddressDTO } from "../../dtos/IUpdateAddressDTO";
import { AppError } from "../../../../shared/errors/AppError";
import { Address } from "../../entities/Address";

@injectable()
class UpdateAddressUseCase {

    constructor(
        @inject("AddressRepository")
        private addressRepository: IAddressRepository
    ) {}

    async execute(id: string, { street, number, city, state, cep }: IUpdateAddressDTO): Promise<Address> {

        const addressAlreadyExists = await this.addressRepository.findById(id);

        if (!addressAlreadyExists) {
            throw new AppError("Address do not exists!");
        }

        const addressUpdated = await this.addressRepository.update(id, {
            street,
            number,
            city,
            state,
            cep
        });

        return addressUpdated;
    }

}

export { UpdateAddressUseCase };