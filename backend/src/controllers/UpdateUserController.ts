import { Request, Response } from "express";
import { UpdateUserService } from "../services/UpdateUserService";

export class UpdateUserController {
    async handle(request: Request, response: Response){
      const { id } = request.params;
      const { nome, descricao, interesses } = request.body;

      const service = new UpdateUserService();

      const result = await service.execute({ id, nome, descricao, interesses });

      if (result instanceof Error) {
        return response.status(400).json(result.message);
      }

      return response.json(result)
    }
}