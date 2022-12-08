import { getRepository } from "typeorm";
import { Portfolio } from "../entities/Portfolio";

export class DeletePortfolioService {
    async execute(id: string) {
        const repo = getRepository(Portfolio);
        
        if(!await repo.findOne(id)) {
            return new Error("Category does not exist!");
        }

        await repo.delete(id);
    }
}