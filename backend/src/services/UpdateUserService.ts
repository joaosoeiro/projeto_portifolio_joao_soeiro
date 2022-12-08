import { getRepository } from "typeorm";
import { User } from "../entities/User";

type UserUpdateRequest = {
    id: string,
    nome: string,
    descricao: string;
    interesses: string
}

export class UpdateUserService {
    async execute({id, nome, descricao, interesses}: UserUpdateRequest) {
        const repo = getRepository(User);

        const user = await repo.findOne(id);
        if(!User) {
            return new Error("Category does not exist!")
        }
   
        user.nome = nome ? nome : user.nome;
        user.descricao = descricao ? descricao : user.descricao;
        user.interesses = interesses ? interesses : user.interesses;

        await repo.save(user);

        return user;
    }
}