import { Request, Response } from "express";
import { container } from "tsyringe";
import { FindAthleteResponsibleByCpfUseCase } from "./FindAthleteResponsibleByCpfUseCase";


class FindAthleteResponsibleByCpfController {

    async handle(request: Request, response: Response): Promise<Response> {

        const cpf = request.params.cpf;

        const findAthleteResponsibleByCpfUseCase = container.resolve(FindAthleteResponsibleByCpfUseCase);

        const athleteResponsible = await findAthleteResponsibleByCpfUseCase.execute(cpf);

        return response.status(200).json(athleteResponsible);
    }
}

export { FindAthleteResponsibleByCpfController }