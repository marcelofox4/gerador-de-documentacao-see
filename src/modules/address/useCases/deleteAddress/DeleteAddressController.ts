import { Request, Response } from "express";
import { container } from "tsyringe";
import { DeleteAddressUseCase } from "./DeleteAddressUseCase";

class DeleteAddressController {

    async handle(request: Request, response: Response): Promise<Response> {

        const idAddress = request.params.id;

        const deleteAddressUseCase = container.resolve(DeleteAddressUseCase);
        await deleteAddressUseCase.execute(idAddress);

        return response.status(200).json({ message: "Deleted address!" });
    }

}

export { DeleteAddressController };