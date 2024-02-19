import { AppError } from "../../../../shared/errors/AppError";
import { AthleteResponsibleRepositoryInMemory } from "../../repositories/in-memory/AthleteResponsibleRepositoryInMemory"
import { FindAthleteResponsibleByCpfUseCase } from "./FindAthleteResponsibleByCpfUseCase";

let athleteResponsibleRepositoryInMemory: AthleteResponsibleRepositoryInMemory;
let findAthleteResponsibleByCpfUseCase: FindAthleteResponsibleByCpfUseCase;

describe("Find Athlete Responsible by CPF", () => {

    beforeEach(() => {
        athleteResponsibleRepositoryInMemory = new AthleteResponsibleRepositoryInMemory();
        findAthleteResponsibleByCpfUseCase = new FindAthleteResponsibleByCpfUseCase(athleteResponsibleRepositoryInMemory);
    });

    it("should be able to find an athlete responsible by CPF", async () => {

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

        const athleteResponsibleFound = await findAthleteResponsibleByCpfUseCase.execute(athleteResponsible.cpf);

        expect(athleteResponsibleFound.cpf).toEqual(athleteResponsible.cpf);
    });

    it("should not be able to find an athlete responsible that does not exist", () => {
        expect(async () => {

            const cpfAthleteResponsible = "non-existent cpf";

            await findAthleteResponsibleByCpfUseCase.execute(cpfAthleteResponsible);

        }).rejects.toBeInstanceOf(AppError);
    });
})
