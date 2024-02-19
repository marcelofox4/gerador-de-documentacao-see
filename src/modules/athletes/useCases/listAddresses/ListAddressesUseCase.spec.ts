import { AddressRepositoryInMemory } from "../../../athletes/repositories/in-memory/AddressRepositoryInMemory"
import { ListAddressesUseCase } from "./ListAddressesUseCase";

let addressRepositoryInMemory: AddressRepositoryInMemory;
let listAddressesUseCase: ListAddressesUseCase;

describe("List Addresses", () => {

    beforeEach(() => {
        addressRepositoryInMemory = new AddressRepositoryInMemory();
        listAddressesUseCase = new ListAddressesUseCase(addressRepositoryInMemory);
    });

    it("should be able to list all addresses", async () => {

        const address = await addressRepositoryInMemory.create({
            street: "Rua teste",
            number: 200,
            city: "Cidade teste", 
            state: "Estado teste",
            cep: "55590000",
        });

        const adresses = await listAddressesUseCase.execute();

        expect(adresses).toEqual([address]);
    });
})