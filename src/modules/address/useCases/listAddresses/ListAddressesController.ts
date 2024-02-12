import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListAddressesUseCase } from "./ListAddressesUseCase";

class ListAddressesController {

    async handle(request: Request, response: Response): Promise<Response> {

        const listAdressesUseCase = container.resolve(ListAddressesUseCase);

        try {
            const adresses = await listAdressesUseCase.execute();
            
            return response.status(200).json(adresses);
        } catch (error) {
            return response.status(400).json(error);
        }
    }
}

export { ListAddressesController };