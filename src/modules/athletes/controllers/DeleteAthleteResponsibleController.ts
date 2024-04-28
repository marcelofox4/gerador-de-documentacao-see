import { Request, Response } from "express";
import { container } from "tsyringe";
import { DeleteAthleteResponsibleUseCase } from "../useCases/deleteAthleteResponsible/DeleteAthleteResponsibleUseCase";

class DeleteAthleteResponsibleController {

    async handle(request: Request, response: Response): Promise<Response> {

        const cpf = request.params.cpf;

        const deleteAthleteResponsibleUseCase = container.resolve(DeleteAthleteResponsibleUseCase);

        const athleteResponsibleDeleted = await deleteAthleteResponsibleUseCase.execute(cpf);

        return response.status(200).json(athleteResponsibleDeleted);
    }
}

export { DeleteAthleteResponsibleController }