import { Request, Response } from "express";
import { DeletePortfolioService } from "../services/DeletePortfolioService";

export class DeletePortfolioController {
    async handle(request: Request, response: Response) {
        const { id } = request.params;

        const service = new DeletePortfolioService();

        const result = await service.execute(id);

        if (result instanceof Error) {
            return response.status(400).json(result.message);
        }

        return response.status(204).end();
    }
}