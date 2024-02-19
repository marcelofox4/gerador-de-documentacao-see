import { Request, Response } from "express";
import { IUpdateAddressDTO } from "../../../athletes/dtos/IUpdateAddressDTO";
import { container } from "tsyringe";
import { UpdateAddressUseCase } from "./UpdateAddressUseCase";

class UpdateAddressController {

    async handle(request: Request, response: Response): Promise<Response> {

        const id = request.params.id;
        const { street, number, city, state, cep }: IUpdateAddressDTO = request.body;

        const updateAddressUseCase = container.resolve(UpdateAddressUseCase);

        await updateAddressUseCase.execute( id, {
            street, 
            number, 
            city, 
            state, 
            cep
        });

        return response.status(200).json({ message: "Updated address!" });
    }
}

export { UpdateAddressController };