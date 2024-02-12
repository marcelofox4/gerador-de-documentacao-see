import { AddressRepositoryInMemory } from "../../repositories/in-memory/AddressRepositoryInMemory";
import { CreateAddressUseCase } from "./CreateAddressUseCase"

let addressRepositoryInMemory: AddressRepositoryInMemory;
let createAddressUseCase: CreateAddressUseCase;

describe("Create Address", () => {

    beforeEach(() => {
        addressRepositoryInMemory = new AddressRepositoryInMemory();
        createAddressUseCase = new CreateAddressUseCase(addressRepositoryInMemory);
    });

    it("should be able to create a new address", async () => {

        const address = {
            street: "Rua teste",
            number: 200,
            city: "Cidade teste", 
            state: "Estado teste",
            cep: "55590000",
        }

        await createAddressUseCase.execute(address);

        const addressCreated = addressRepositoryInMemory.adresses[0];

        expect(addressCreated).toHaveProperty("id");
    });
})