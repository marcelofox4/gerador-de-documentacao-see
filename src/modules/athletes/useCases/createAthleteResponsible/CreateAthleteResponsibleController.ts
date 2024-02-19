import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateAthleteResponsibleUseCase } from "./CreateAthleteResponsibleUseCase";

class CreateAthleteResponsibleController {

    async handle(request: Request, response: Response): Promise<Response> {

        const { name, cpf, rg, email, phoneNumber, profession, maritalStatus, addressId } = request.body;

        const createAthleteResponsibleUseCase = container.resolve(CreateAthleteResponsibleUseCase);
        const athleteResponsible = await createAthleteResponsibleUseCase.execute({
            name, 
            cpf, 
            rg, 
            email, 
            phoneNumber, 
            profession, 
            maritalStatus,
            addressId,
        });

        return response.status(201).json(athleteResponsible);
    }

}

export { CreateAthleteResponsibleController };