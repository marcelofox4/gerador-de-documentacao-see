import { Request, Response } from "express";
import { container } from "tsyringe";
import { FindAthleteResponsibleByCpfUseCase } from "../useCases/findAthleteResponsibleByCpf/FindAthleteResponsibleByCpfUseCase";
import { FindAddressByIdUseCase } from "../../address/useCases/findAddressById/FindAddressByIdUseCase";


class FindAthleteResponsibleByCpfController {

    async handle(request: Request, response: Response): Promise<Response> {

        const cpf = request.params.cpf;

        const findAthleteResponsibleByCpfUseCase = container.resolve(FindAthleteResponsibleByCpfUseCase);
        const findAddressByIdUseCase = container.resolve(FindAddressByIdUseCase);

        const athleteResponsible = await findAthleteResponsibleByCpfUseCase.execute(cpf);
        const address = await findAddressByIdUseCase.execute(athleteResponsible.addressId);

        const dataAthleteResponsible = {
            name: athleteResponsible.name,
            cpf: athleteResponsible.cpf,
            rg: athleteResponsible.rg,
            gender: athleteResponsible.gender,
            email: athleteResponsible.email,
            phoneNumber: athleteResponsible.phoneNumber,
            profession: athleteResponsible.profession,
            maritalStatus: athleteResponsible.maritalStatus,
            address: {
                street: address.street,
                number: address.number,
                city: address.city,
                state: address.state,
                cep: address.cep,
            }
        };

        return response.status(200).json(dataAthleteResponsible);
    }
}

export { FindAthleteResponsibleByCpfController }