import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class Portfolio1669938821890 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "portfolio",
                columns : [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name: "nome",
                        type: "varchar",
                        isUnique: true
                    },
                    {
                        name: "descricao",
                        type: "varchar",
                    }
                ]
            })
        ) 
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
