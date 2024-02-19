import { AppError } from "../../../../shared/errors/AppError";
import { AthleteResponsibleRepositoryInMemory } from "../../repositories/in-memory/AthleteResponsibleRepositoryInMemory";
import { DeleteAthleteResponsibleUseCase } from "./DeleteAthleteResponsibleUseCase";

let athleteResponsibleRepositoryInMemory: AthleteResponsibleRepositoryInMemory;
let deleteAthleteResponsibleUseCase: DeleteAthleteResponsibleUseCase;

describe("Delete Athlete Responsible", () => {

    beforeEach(() => {
        athleteResponsibleRepositoryInMemory = new AthleteResponsibleRepositoryInMemory();
        deleteAthleteResponsibleUseCase = new DeleteAthleteResponsibleUseCase(athleteResponsibleRepositoryInMemory);
    });

    it("should be abble to delete an athlete responsible", async () => {

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

        await deleteAthleteResponsibleUseCase.execute(athleteResponsibleCreated.cpf);

        expect(athleteResponsibleRepositoryInMemory.athletesResponsible.length).toEqual(0);
    });

    it("should not be able to delete an athlete responsible that does not exist", () => {
        expect(async () => {

            const idAthleteResponsible = "non-existent id"

            await deleteAthleteResponsibleUseCase.execute(idAthleteResponsible);

        }).rejects.toBeInstanceOf(AppError);
    });

});