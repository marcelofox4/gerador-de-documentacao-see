import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListAthleteResponsibleUseCase } from "./ListAthleteResponsibleUseCase";

class ListAthleteResponsibleController {

    async handle(request: Request, response: Response): Promise<Response> {

        const listAthleteResponsibleUseCase = container.resolve(ListAthleteResponsibleUseCase);

        const allAthletesResponsible = await listAthleteResponsibleUseCase.execute();

        return response.status(200).json(allAthletesResponsible);
    }
}

export { ListAthleteResponsibleController };