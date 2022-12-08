import { getRepository } from "typeorm";
import { Portfolio } from "../entities/Portfolio";


export class GetOnePortfolioService {
    async execute(id: string) {
        const repo = getRepository(Portfolio);
       
        const portfolio = await repo.findOne(id);
        if(!portfolio) {
            return new Error("portfolio does not exist!")
        }

        await repo.save(portfolio);

        return portfolio;
    }
}