import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListAdressesUseCase } from "./ListAdressesUseCase";

class ListAdressesController {

    async handle(request: Request, response: Response): Promise<Response> {

        const listAdressesUseCase = container.resolve(ListAdressesUseCase);

        try {
            const adresses = await listAdressesUseCase.execute();
            
            return response.status(200).json(adresses);
        } catch (error) {
            return response.status(400).json(error);
        }
    }
}

export { ListAdressesController };