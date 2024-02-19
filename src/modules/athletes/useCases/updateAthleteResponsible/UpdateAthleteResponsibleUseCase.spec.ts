
import { AppError } from "../../../../shared/errors/AppError";
import { AthleteResponsibleRepositoryInMemory } from "../../../athletes/repositories/in-memory/AthleteResponsibleRepositoryInMemory";
import { UpdateAthleteResponsibleUseCase } from "./UpdateAthleteResponsibleUseCase";

let athleteResponsibleRepositoryInMemory: AthleteResponsibleRepositoryInMemory;
let updateAthleteResponsibleUseCase: UpdateAthleteResponsibleUseCase;

describe("Update Athlete Responsible", () => {

    beforeEach(() => {
        athleteResponsibleRepositoryInMemory = new AthleteResponsibleRepositoryInMemory();
        updateAthleteResponsibleUseCase = new UpdateAthleteResponsibleUseCase(athleteResponsibleRepositoryInMemory);
    });

    it("should be able to update an athlete responsible", async () => {

        const athleteResponsibleCreated = await athleteResponsibleRepositoryInMemory.create({
            name: "Nome do Responsável",
            cpf: "11122233344", 
            rg: "1222333-SDS", 
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
            addressId: "Id - Endereço do Responsável UPDATED",
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
                email: "responsavel@email.com", 
                phoneNumber: "81977774444", 
                profession: "Profissão do Responsável", 
                maritalStatus: "Estado civil do Responsável",
                addressId: "Id - Endereço do Responsável",
            });
    
            await updateAthleteResponsibleUseCase.execute(cpfAthleteResponsible, {
                email: "responsavelUpdated@email.com", 
                phoneNumber: "81977774455", 
                profession: "Profissão do Responsável UPDATED", 
                maritalStatus: "Estado civil do Responsável UPDATED",
                addressId: "Id - Endereço do Responsável UPDATED",
            });

        }).rejects.toBeInstanceOf(AppError);
    });

});
