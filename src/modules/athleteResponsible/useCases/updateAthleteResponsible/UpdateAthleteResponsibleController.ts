import { Request, Response } from "express";
import { container } from "tsyringe";
import { UpdateAthleteResponsibleUseCase } from "./UpdateAthleteResponsibleUseCase";

class UpdateAthleteResponsibleController {

    async handle(request: Request, response: Response): Promise<Response> {

        const cpf = request.params.cpf;
        const { email, phoneNumber, profession, maritalStatus, addressId } = request.body;

        const updateAthleteResponsibleUseCase = container.resolve(UpdateAthleteResponsibleUseCase);

        const athleteResponsibleUpdated = await updateAthleteResponsibleUseCase.execute(cpf, {
            email, 
            phoneNumber, 
            profession, 
            maritalStatus, 
            addressId,
        });

        return response.status(200).json(athleteResponsibleUpdated);
    }
}

export { UpdateAthleteResponsibleController };