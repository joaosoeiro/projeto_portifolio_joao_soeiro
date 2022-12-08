import { Request, Response } from "express";
import {  GetOnePortfolioService} from "../services/GetOnePortfolioService";

export class GetOnePortfolioController {
    async handle(request: Request, response: Response) {
       const { id } = request.params
        const service = new GetOnePortfolioService();

        const categories = await service.execute(id);

        return response.json(categories)
    }
}