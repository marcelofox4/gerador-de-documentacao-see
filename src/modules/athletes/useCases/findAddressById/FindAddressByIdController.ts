import { Request, Response } from "express";
import { container } from "tsyringe";
import { FindAddressByIdUseCase } from "./FindAddressByIdUseCase";

class FindAddressByIdController {

    async handle(request: Request, response: Response): Promise<Response> {

        const addressId = request.params.id;

        const findAddressByIdUseCase = container.resolve(FindAddressByIdUseCase);
        const addressFound = await findAddressByIdUseCase.execute(addressId);

        return response.status(200).json(addressFound);
    }

}

export { FindAddressByIdController };