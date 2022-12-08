//Criação de repositório que é a camada que vai fazer a comunicação com o banco de dados

import { getRepository } from "typeorm";
import { Portfolio } from "../entities/Portfolio";

type PortfolioRequest = {
    nome: string,
    descricao: string;
}

export class CreatePortfolioService {
    async execute({
        nome,
        descricao
    }: PortfolioRequest): Promise<Portfolio | Error> {
        const repo = getRepository(Portfolio);
        
        // SELECT * FROM CATEGORIES WHERE nome = "nome" LIMIT 1
        if(await repo.findOne({nome})) {
            return new Error("Portfolio already exists");
        }

        const portfolio = repo.create({
            nome,
            descricao
        })

        await repo.save(portfolio);

        return portfolio;
    }
}