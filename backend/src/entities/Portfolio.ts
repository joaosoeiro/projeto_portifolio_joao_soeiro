//Essa é classe que vai referenciar a tabela no banco de dados
//A classe que vai referenciar a tabela no banco de dados

import { Entity, Column, PrimaryColumn } from "typeorm";
import { v4 as uuid } from "uuid";

@Entity("portfolio")
export class Portfolio {
    @PrimaryColumn()
    id: string;

    @Column()
    nome: string;

    @Column()
    descricao: string;

    constructor() {
        if(!this.id) {
            this.id = uuid()
        }
    }
}