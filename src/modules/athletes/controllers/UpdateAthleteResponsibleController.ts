import { Request, Response } from "express";
import { container } from "tsyringe";
import { UpdateAthleteResponsibleUseCase } from "../useCases/updateAthleteResponsible/UpdateAthleteResponsibleUseCase";

class UpdateAthleteResponsibleController {

    async handle(request: Request, response: Response): Promise<Response> {

        const cpf = request.params.cpf;
        const { email, phoneNumber, profession, maritalStatus, street, number, city, state, cep } = request.body;

        const updateAthleteResponsibleUseCase = container.resolve(UpdateAthleteResponsibleUseCase);

        await updateAthleteResponsibleUseCase.execute(cpf, {
            email, 
            phoneNumber, 
            profession, 
            maritalStatus, 
            street, 
            number, 
            city, 
            state, 
            cep,
        });

        const athleteResponsibleUpdated = {
            email: email, 
            phoneNumber: phoneNumber, 
            profession: profession, 
            maritalStatus: maritalStatus,
            street: street, 
            number: 200, 
            city: city, 
            state: state, 
            cep: cep,
        }

        return response.status(200).json(athleteResponsibleUpdated);
    }
}

export { UpdateAthleteResponsibleController };