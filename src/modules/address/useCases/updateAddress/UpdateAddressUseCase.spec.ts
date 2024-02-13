import { AppError } from "../../../../shared/errors/AppError";
import { AddressRepositoryInMemory } from "../../repositories/in-memory/AddressRepositoryInMemory";
import { UpdateAddressUseCase } from "./UpdateAddressUseCase";

let addressRepositoryInMemory: AddressRepositoryInMemory;
let updateAddressUseCase: UpdateAddressUseCase;

describe("Update Address", () => {

    beforeEach(() => {
        addressRepositoryInMemory = new AddressRepositoryInMemory();
        updateAddressUseCase = new UpdateAddressUseCase(addressRepositoryInMemory);
    });

    it("should be able to update a address", async () => {

        await addressRepositoryInMemory.create({
            street: "Rua teste",
            number: 200,
            city: "Cidade teste", 
            state: "Estado teste",
            cep: "55590000",
        });

        const addressCreated = addressRepositoryInMemory.adresses[0];

        const addressUpdated = await updateAddressUseCase.execute(addressCreated.id, {
            street: "Rua teste update",
            number: 0,
            city: "Cidade teste update", 
            state: "Estado teste update",
            cep: "55590000 update",
        });

        expect(addressUpdated.id).toEqual(addressCreated.id);
    });

    it("should not be able to update an address that does not exist", () => {
        expect(async () => {

            const idAddreess = "non-existent id"

            await updateAddressUseCase.execute(idAddreess, {
                street: "Rua teste update",
                number: 0,
                city: "Cidade teste update", 
                state: "Estado teste update",
                cep: "55590000 update",
            });

        }).rejects.toBeInstanceOf(AppError);
    });
})