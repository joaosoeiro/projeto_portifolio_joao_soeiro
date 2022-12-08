//Criação de repositório que é a camada que vai fazer a comunicação com o banco de dados

import { getRepository } from "typeorm";
import { User } from "../entities/User";

type UserRequest = {
    nome: string,
    descricao: string;
    interesses: string
}

export class CreateUserService {
    async execute({
        nome,
        descricao,
        interesses
    }: UserRequest): Promise<User | Error> {
        const repo = getRepository(User);
        
        // SELECT * FROM CATEGORIES WHERE nome = "nome" LIMIT 1
        if(await repo.findOne({nome})) {
            return new Error("User already exists");
        }

        const user = repo.create({
            nome,
            descricao,
            interesses
        })

        await repo.save(user);

        return user;
    }
}