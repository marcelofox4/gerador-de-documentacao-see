import { AppError } from "../../../../shared/errors/AppError";
import { AddressRepositoryInMemory } from "../../../athletes/repositories/in-memory/AddressRepositoryInMemory"
import { DeleteAddressUseCase } from "./DeleteAddressUseCase";

let addressRepositoryInMemory: AddressRepositoryInMemory;
let deleteAddressUseCase: DeleteAddressUseCase;

describe("Delete Address", () => {

    beforeEach(() => {
        addressRepositoryInMemory = new AddressRepositoryInMemory();
        deleteAddressUseCase = new DeleteAddressUseCase(addressRepositoryInMemory);
    })

    it("should be abble to delete an address", async () => {

        const addressCreated = await addressRepositoryInMemory.create({
            street: "Rua teste",
            number: 200,
            city: "Cidade teste", 
            state: "Estado teste",
            cep: "55590000",
        });

        await addressRepositoryInMemory.delete(addressCreated.id);

        const addressDeleted = addressRepositoryInMemory.adresses[0];

        expect(addressRepositoryInMemory.adresses.length).toEqual(0);
    })

    it("should not be able to delete an address that does not exist", () => {
        expect(async () => {

            const idAddreess = "non-existent id"

            await deleteAddressUseCase.execute(idAddreess);

        }).rejects.toBeInstanceOf(AppError);
    });

})