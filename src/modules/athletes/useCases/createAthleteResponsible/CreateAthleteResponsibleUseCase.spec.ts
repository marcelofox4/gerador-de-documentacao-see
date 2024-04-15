import { AppError } from "../../../../shared/errors/AppError";
import { AddressRepositoryInMemory } from "../../../address/repositories/in-memory/AddressRepositoryInMemory";
import { AthleteResponsibleRepositoryInMemory } from "../../../athletes/repositories/in-memory/AthleteResponsibleRepositoryInMemory";
import { CreateAthleteResponsibleUseCase } from "./CreateAthleteResponsibleUseCase";

let athleteResponsibleRepositoryInMemory: AthleteResponsibleRepositoryInMemory;
let addressRepositoryInMemory: AddressRepositoryInMemory;
let createAthleteResponsibleUseCase: CreateAthleteResponsibleUseCase;

describe("Create Address", () => {

    beforeEach(() => {
        athleteResponsibleRepositoryInMemory = new AthleteResponsibleRepositoryInMemory();
        addressRepositoryInMemory = new AddressRepositoryInMemory();
        createAthleteResponsibleUseCase = new CreateAthleteResponsibleUseCase(athleteResponsibleRepositoryInMemory, addressRepositoryInMemory);
    });

    it("should be able to create a new Athlete Responsible", async () => {

        const athleteResponsibleCreated = await createAthleteResponsibleUseCase.execute({
            name: "Nome do Responsável",
            cpf: "11122233344", 
            rg: "1222333-SDS",
            gender: "Masculino",
            email: "responsavel@email.com", 
            phoneNumber: "81977774444", 
            profession: "Profissão do Responsável", 
            maritalStatus: "Estado civil do Responsável",
            street: "Rua de Teste", 
            number: 100, 
            city: "Cidade Teste", 
            state: "Estado Teste", 
            cep: "Teste",
        });

        expect(athleteResponsibleCreated).toHaveProperty("id");
    });

    it("should not be able to create a new Athlete Responsible with exists cpf", () => {
        expect(async () => {

            await createAthleteResponsibleUseCase.execute({
                name: "Nome do Responsável",
                cpf: "11122233344", 
                rg: "1222333-SDS",
                gender: "Masculino",
                email: "responsavel@email.com", 
                phoneNumber: "81977774444", 
                profession: "Profissão do Responsável", 
                maritalStatus: "Estado civil do Responsável",
                street: "Rua de Teste", 
                number: 100, 
                city: "Cidade Teste", 
                state: "Estado Teste", 
                cep: "Teste",
            });

            await createAthleteResponsibleUseCase.execute({
                name: "Nome do Responsável 2",
                cpf: "11122233344", 
                rg: "1222444-SDS",
                gender: "Masculino",
                email: "responsavel2@email.com", 
                phoneNumber: "81977771111", 
                profession: "Profissão do Responsável 2", 
                maritalStatus: "Estado civil do Responsável 2",
                street: "Rua de Teste 2", 
                number: 102, 
                city: "Cidade Teste 2", 
                state: "Estado Teste 2", 
                cep: "Teste 2",
            });
            
        }).rejects.toBeInstanceOf(AppError);
    });
})