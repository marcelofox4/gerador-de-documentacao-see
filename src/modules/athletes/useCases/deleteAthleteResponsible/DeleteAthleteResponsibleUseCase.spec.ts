import { AppError } from "../../../../shared/errors/AppError";
import { AddressRepositoryInMemory } from "../../../address/repositories/in-memory/AddressRepositoryInMemory";
import { AthleteResponsibleRepositoryInMemory } from "../../../athletes/repositories/in-memory/AthleteResponsibleRepositoryInMemory";
import { DeleteAthleteResponsibleUseCase } from "./DeleteAthleteResponsibleUseCase";

let athleteResponsibleRepositoryInMemory: AthleteResponsibleRepositoryInMemory;
let addressRepositoryInMemory: AddressRepositoryInMemory;
let deleteAthleteResponsibleUseCase: DeleteAthleteResponsibleUseCase;

describe("Delete Athlete Responsible", () => {

    beforeEach(() => {
        athleteResponsibleRepositoryInMemory = new AthleteResponsibleRepositoryInMemory();
        addressRepositoryInMemory = new AddressRepositoryInMemory();
        deleteAthleteResponsibleUseCase = new DeleteAthleteResponsibleUseCase(athleteResponsibleRepositoryInMemory, addressRepositoryInMemory);
    });

    it("should be abble to delete an athlete responsible", async () => {

        const addressCreated = await addressRepositoryInMemory.create({
            street: "Rua de teste",
            number: 100,
            city: "Cidade de teste",
            state: "Estado de teste",
            cep: "55590000",
        });

        const athleteResponsibleCreated = await athleteResponsibleRepositoryInMemory.create({
            name: "Nome do Responsável",
            cpf: "11122233344", 
            rg: "1222333-SDS",
            gender: "Masculino",
            email: "responsavel@email.com",
            phoneNumber: "81977774444", 
            profession: "Profissão do Responsável", 
            maritalStatus: "Estado civil do Responsável",
            addressId: addressCreated.id,
        });

        await deleteAthleteResponsibleUseCase.execute(athleteResponsibleCreated.cpf);

        expect(athleteResponsibleRepositoryInMemory.athletesResponsible.length && addressRepositoryInMemory.adresses.length).toEqual(0);
    });

    it("should not be able to delete an athlete responsible that does not exist", () => {
        expect(async () => {

            const idAthleteResponsible = "non-existent id"

            await deleteAthleteResponsibleUseCase.execute(idAthleteResponsible);

        }).rejects.toBeInstanceOf(AppError);
    });

});