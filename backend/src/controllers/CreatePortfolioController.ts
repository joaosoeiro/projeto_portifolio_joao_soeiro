import { Request, Response } from "express";
import { CreatePortfolioService } from "../services/CreatePortfolioService"

export class CreatePortfolioController {
    async handle(request: Request, response: Response) {
        const { nome, descricao } = request.body

        const service = new CreatePortfolioService();

        const result = await service.execute({nome, descricao});

        if(result instanceof Error) {
            return response.status(400).json(result.message);
        }

        return response.json(result);
    }
}