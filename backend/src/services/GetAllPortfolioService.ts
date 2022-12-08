import { getRepository } from "typeorm";
import { Portfolio } from "../entities/Portfolio";

export class GetAllPortfolioService {
    async execute() {
        const repo = getRepository(Portfolio);

        const portfolio = await repo.find();

        return portfolio;
    }
}