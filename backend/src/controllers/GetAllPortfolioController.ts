import { Request, Response } from "express";
import { GetAllPortfolioService } from "../services/GetAllPortfolioService";

export class GetAllPortfolioController {
    async handle(request: Request, response: Response) {
        const service = new GetAllPortfolioService();

        const portfolio = await service.execute();

        return response.json(portfolio)
    }
}