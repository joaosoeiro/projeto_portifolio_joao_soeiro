import { getRepository } from "typeorm";
import { Portfolio } from "../entities/Portfolio";

type PortfolioUpdateRequest = {
    id: string,
    nome: string,
    descricao: string;
}

export class UpdatePortfolioService {
    async execute({id, nome, descricao}: PortfolioUpdateRequest) {
        const repo = getRepository(Portfolio);

        const portfolio = await repo.findOne(id);
        if(!portfolio) {
            return new Error("portfolio does not exist!")
        }
   
        portfolio.nome = nome ? nome : portfolio.nome;
        portfolio.descricao = descricao ? descricao : portfolio.descricao;

        await repo.save(portfolio);

        return portfolio;
    }
}