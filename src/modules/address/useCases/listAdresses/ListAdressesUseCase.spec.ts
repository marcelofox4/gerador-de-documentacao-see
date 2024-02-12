import { AddressRepositoryInMemory } from "../../repositories/in-memory/AddressRepositoryInMemory"
import { ListAdressesUseCase } from "./ListAdressesUseCase";

let addressRepositoryInMemory: AddressRepositoryInMemory;
let listAdressesUseCase: ListAdressesUseCase;

describe("List Adresses", () => {

    beforeEach(() => {
        addressRepositoryInMemory = new AddressRepositoryInMemory();
        listAdressesUseCase = new ListAdressesUseCase(addressRepositoryInMemory);
    });

    it("should be able to list all adresses", async () => {

        const address = await addressRepositoryInMemory.create({
            street: "Rua teste",
            number: 200,
            city: "Cidade teste", 
            state: "Estado teste",
            cep: "55590000",
        });

        const adresses = await addressRepositoryInMemory.list();

        expect(adresses).toEqual([address]);
    });
})