import { AppError } from "../../../../shared/errors/AppError";
import { AddressRepositoryInMemory } from "../../../address/repositories/in-memory/AddressRepositoryInMemory";
import { FindAddressByIdUseCase } from "./FindAddressByIdUseCase";

let addressRepositoryInMemory: AddressRepositoryInMemory;
let findAddressByIdUseCase: FindAddressByIdUseCase;

describe("Find Address by ID", () => {

    beforeEach(() => {
        addressRepositoryInMemory = new AddressRepositoryInMemory();
        findAddressByIdUseCase = new FindAddressByIdUseCase(addressRepositoryInMemory);
    });

    it("should be able to find an address by ID", async () => {

        const addressCreated = await addressRepositoryInMemory.create({
            street: "Rua teste",
            number: 200,
            city: "Cidade teste", 
            state: "Estado teste",
            cep: "55590000",
        });

        const addressCreatedId = addressCreated.id;

        const addressFound = await findAddressByIdUseCase.execute(addressCreatedId);

        expect(addressFound.id).toEqual(addressCreated.id);
    });

    it("should not be able to find an address that does not exist", () => {
        expect(async () => {

            const idAddreess = "non-existent id"

            await findAddressByIdUseCase.execute(idAddreess);

        }).rejects.toBeInstanceOf(AppError);
    });
});