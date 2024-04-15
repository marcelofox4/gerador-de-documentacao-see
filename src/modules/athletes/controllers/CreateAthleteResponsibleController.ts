import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateAthleteResponsibleUseCase } from "../useCases/createAthleteResponsible/CreateAthleteResponsibleUseCase";

class CreateAthleteResponsibleController {

    async handle(request: Request, response: Response): Promise<Response> {

        const { name, cpf, rg, gender, email, phoneNumber, profession, maritalStatus, street, number, city, state, cep  } = request.body;

        const createAthleteResponsibleUseCase = container.resolve(CreateAthleteResponsibleUseCase);

        await createAthleteResponsibleUseCase.execute({
            name, 
            cpf, 
            rg,
            gender,
            email, 
            phoneNumber, 
            profession, 
            maritalStatus, 
            street, 
            number, 
            city, 
            state, 
            cep,
        })

        const athleteResponsibleCreated = {
            name: name,
            cpf: cpf, 
            rg: rg, 
            email: email, 
            phoneNumber: phoneNumber, 
            profession: profession, 
            maritalStatus: maritalStatus,
            street: street, 
            number: number, 
            city: city, 
            state: state, 
            cep: cep,
        }

        return response.status(201).json(athleteResponsibleCreated);
    }

}

export { CreateAthleteResponsibleController };