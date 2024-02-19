import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateAddressUseCase } from "./CreateAddressUseCase";

class CreateAddressController {

    async handle(request: Request, response: Response): Promise<Response> {

        const { street, number, city, state, cep } = request.body;

        const createAddressUseCase = container.resolve(CreateAddressUseCase);
        await createAddressUseCase.execute({
            street, 
            number, 
            city, 
            state, 
            cep
        });

        return response.status(201).json({ message: "Address created!" });
    }
}

export { CreateAddressController };