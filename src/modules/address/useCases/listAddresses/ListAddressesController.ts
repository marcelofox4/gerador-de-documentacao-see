import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListAddressesUseCase } from "./ListAddressesUseCase";

class ListAddressesController {

    async handle(request: Request, response: Response): Promise<Response> {

        const listAdressesUseCase = container.resolve(ListAddressesUseCase);

        const adresses = await listAdressesUseCase.execute();
            
        return response.status(200).json(adresses);
    }
}

export { ListAddressesController };