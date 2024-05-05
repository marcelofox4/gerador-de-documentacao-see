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
            athleteResponsible: athleteResponsible,
            address: address,
        };

        return response.status(200).json(dataAthleteResponsible);
    }
}

export { FindAthleteResponsibleByCpfController }