//Essa é a classe que vai referencia a tabela no banco de dados

import { Entity, Column, PrimaryColumn } from "typeorm";
import { v4 as uuid } from "uuid";

//referenciando para pegar na tabela user
@Entity("user")
export class User {
    @PrimaryColumn()
    id: string;

    @Column()
    nome: string;

    @Column()
    descricao: string;

    @Column()
    interesses: string;
    
    constructor() {
        if(!this.id) {
            this.id = uuid()
        }
    }
}