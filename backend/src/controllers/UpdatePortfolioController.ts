import { Request, Response } from "express";
import { UpdatePortfolioService } from "../services/UpdatePortfolioService";

export class UpdatePortfolioController {
    async handle(request: Request, response: Response){
      const { id } = request.params;
      const { nome, descricao } = request.body;

      const service = new UpdatePortfolioService();

      const result = await service.execute({ id, nome, descricao });

      if (result instanceof Error) {
        return response.status(400).json(result.message);
      }

      return response.json(result)
    }
}