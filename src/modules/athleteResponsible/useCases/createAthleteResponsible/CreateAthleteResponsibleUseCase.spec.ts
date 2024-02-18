import { AppError } from "../../../../shared/errors/AppError";
import { AthleteResponsibleRepositoryInMemory } from "../../repositories/in-memory/AthleteResponsibleRepositoryInMemory";
import { CreateAthleteResponsibleUseCase } from "./CreateAthleteResponsibleUseCase";

let athleteResponsibleRepositoryInMemory: AthleteResponsibleRepositoryInMemory;
let createAthleteResponsibleUseCase: CreateAthleteResponsibleUseCase;

describe("Create Address", () => {

    beforeEach(() => {
        athleteResponsibleRepositoryInMemory = new AthleteResponsibleRepositoryInMemory();
        createAthleteResponsibleUseCase = new CreateAthleteResponsibleUseCase(athleteResponsibleRepositoryInMemory);
    });

    it("should be able to create a new Athlete Responsible", async () => {

        const athleteResponsibleCreated = await createAthleteResponsibleUseCase.execute({
            name: "Nome do Responsável",
            cpf: "11122233344", 
            rg: "1222333-SDS", 
            email: "responsavel@email.com", 
            phoneNumber: "81977774444", 
            profession: "Profissão do Responsável", 
            maritalStatus: "Estado civil do Responsável",
            addressId: "Id - Endereço do Responsável",
        });

        expect(athleteResponsibleCreated).toHaveProperty("id");
    });

    it("should not be able to create a new Athlete Responsible with exists cpf", () => {
        expect(async () => {

            await createAthleteResponsibleUseCase.execute({
                name: "Nome do Responsável",
                cpf: "11122233344", 
                rg: "1222333-SDS", 
                email: "responsavel@email.com", 
                phoneNumber: "81977774444", 
                profession: "Profissão do Responsável", 
                maritalStatus: "Estado civil do Responsável",
                addressId: "Id - Endereço do Responsável",
            });

            await createAthleteResponsibleUseCase.execute({
                name: "Nome do Responsável 2",
                cpf: "11122233344", 
                rg: "1222444-SDS", 
                email: "responsavel2@email.com", 
                phoneNumber: "81977771111", 
                profession: "Profissão do Responsável 2", 
                maritalStatus: "Estado civil do Responsável 2",
                addressId: "Id - Endereço do Responsável 2",
            });
            
        }).rejects.toBeInstanceOf(AppError);
    });
})