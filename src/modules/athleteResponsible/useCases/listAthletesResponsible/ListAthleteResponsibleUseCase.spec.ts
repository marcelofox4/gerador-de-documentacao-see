import { AthleteResponsibleRepositoryInMemory } from "../../repositories/in-memory/AthleteResponsibleRepositoryInMemory";
import { ListAthleteResponsibleUseCase } from "./ListAthleteResponsibleUseCase";

let athleteResponsibleRepositoryInMemory: AthleteResponsibleRepositoryInMemory;
let listAthleteResponsibleUseCase: ListAthleteResponsibleUseCase;

describe("List all Athletes Responsible", () => {

    beforeEach(() => {
        athleteResponsibleRepositoryInMemory = new AthleteResponsibleRepositoryInMemory();
        listAthleteResponsibleUseCase = new ListAthleteResponsibleUseCase(athleteResponsibleRepositoryInMemory);
    });

    it("should be able to list all athletes responsible", async () => {

        const athleteResponsible = await athleteResponsibleRepositoryInMemory.create({
            name: "Nome do Responsável",
            cpf: "11122233344", 
            rg: "1222333-SDS", 
            email: "responsavel@email.com", 
            phoneNumber: "81977774444", 
            profession: "Profissão do Responsável", 
            maritalStatus: "Estado civil do Responsável",
            addressId: "Id - Endereço do Responsável",
        });

        const allAthletesResponsible = await listAthleteResponsibleUseCase.execute();

        expect(allAthletesResponsible).toEqual([athleteResponsible]);
    });

});