
import { AppError } from "../../../../shared/errors/AppError";
import { AddressRepositoryInMemory } from "../../../address/repositories/in-memory/AddressRepositoryInMemory";
import { AthleteResponsibleRepositoryInMemory } from "../../../athletes/repositories/in-memory/AthleteResponsibleRepositoryInMemory";
import { UpdateAthleteResponsibleUseCase } from "./UpdateAthleteResponsibleUseCase";

let athleteResponsibleRepositoryInMemory: AthleteResponsibleRepositoryInMemory;
let addressRepositoryInMemory: AddressRepositoryInMemory;
let updateAthleteResponsibleUseCase: UpdateAthleteResponsibleUseCase;

describe("Update Athlete Responsible", () => {

    beforeEach(() => {
        athleteResponsibleRepositoryInMemory = new AthleteResponsibleRepositoryInMemory();
        addressRepositoryInMemory = new AddressRepositoryInMemory();
        updateAthleteResponsibleUseCase = new UpdateAthleteResponsibleUseCase(athleteResponsibleRepositoryInMemory, addressRepositoryInMemory);
    });

    it("should be able to update an athlete responsible", async () => {

        const athleteResponsibleCreated = await athleteResponsibleRepositoryInMemory.create({
            name: "Nome do Responsável",
            cpf: "11122233344", 
            rg: "1222333-SDS",
            gender: "Masculino",
            email: "responsavel@email.com", 
            phoneNumber: "81977774444", 
            profession: "Profissão do Responsável", 
            maritalStatus: "Estado civil do Responsável",
            addressId: "Id - Endereço do Responsável",
        });

        const athleteResponsibleUpdated = await updateAthleteResponsibleUseCase.execute(athleteResponsibleCreated.cpf, {
            email: "responsavelUpdated@email.com", 
            phoneNumber: "81977774455", 
            profession: "Profissão do Responsável UPDATED", 
            maritalStatus: "Estado civil do Responsável UPDATED",
            street: "Rua de Teste UPDATED", 
            number: 200, 
            city: "Cidade Teste UPDATED", 
            state: "Estado Teste UPDATED", 
            cep: "Teste UPDATED",
        });

        expect(athleteResponsibleUpdated.cpf).toEqual(athleteResponsibleCreated.cpf);
    });

    it("should not be able to update an athlete responsible that does not exist", () => {
        expect(async () => {

            const cpfAthleteResponsible = "non-existent cpf";

            await athleteResponsibleRepositoryInMemory.create({
                name: "Nome do Responsável",
                cpf: "11122233344", 
                rg: "1222333-SDS", 
                gender: "Masculino",
                email: "responsavel@email.com", 
                phoneNumber: "81977774444", 
                profession: "Profissão do Responsável", 
                maritalStatus: "Estado civil do Responsável"
            });
    
            await updateAthleteResponsibleUseCase.execute(cpfAthleteResponsible, {
                email: "responsavelUpdated@email.com", 
                phoneNumber: "81977774455", 
                profession: "Profissão do Responsável UPDATED", 
                maritalStatus: "Estado civil do Responsável UPDATED",
                street: "Rua de Teste UPDATED", 
                number: 200, 
                city: "Cidade Teste UPDATED", 
                state: "Estado Teste UPDATED", 
                cep: "Teste UPDATED",
            });

        }).rejects.toBeInstanceOf(AppError);
    });

});
