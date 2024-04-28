import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListAthleteResponsibleUseCase } from "../useCases/listAthletesResponsible/ListAthleteResponsibleUseCase";
import { ListAddressesUseCase } from "../../address/useCases/listAddresses/ListAddressesUseCase";

class ListAthleteResponsibleController {

    async handle(request: Request, response: Response): Promise<Response> {

        const listAthleteResponsibleUseCase = container.resolve(ListAthleteResponsibleUseCase);
        const listAdressesUseCase = container.resolve(ListAddressesUseCase);

        const allAthletesResponsible = await listAthleteResponsibleUseCase.execute();
        const allAddresses = await listAdressesUseCase.execute();
        
        const dataAthletesResponsible = [];
        for (let i = 0; i < allAthletesResponsible.length; i++) {

            for (let j = 0; j < allAddresses.length; j++) {

                if (allAthletesResponsible[i].addressId === allAddresses[j].id) {

                    dataAthletesResponsible.push({
                        AthleteResponsible: allAthletesResponsible[i],
                        Address: allAddresses[j],
                    });
                }
            }
        }

        return response.status(200).json(dataAthletesResponsible);
    }
}

export { ListAthleteResponsibleController };