import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class CreateTableAthleteResponsible1708221777537 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "athleteResponsible",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true,
                    },
                    {
                        name: "name",
                        type: "varchar",
                    },
                    {
                        name: "cpf",
                        type: "varchar",
                    },
                    {
                        name: "rg",
                        type: "varchar",
                    },
                    {
                        name: "email",
                        type: "varchar",
                        isNullable: true,
                    },
                    {
                        name: "phoneNumber",
                        type: "varchar",
                    },
                    {
                        name: "profession",
                        type: "varchar",
                    },
                    {
                        name: "maritalStatus",
                        type: "varchar",
                    },
                    {
                        name: "addressId",
                        type: "uuid",
                        isNullable: true,
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()",
                    },
                    {
                        name: "update_at",
                        type: "timestamp",
                        default: "now()",
                    },
                ],
            }),
        );

        await queryRunner.createForeignKey(
            "athleteResponsible",
            new TableForeignKey({
                name: "FKAddress",
                referencedTableName: "address",
                referencedColumnNames: ["id"],
                columnNames: ["addressId"],
                onDelete: "SET NULL",
                onUpdate: "SET NULL"
            }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey(
            "athleteResponsible",
            "FKAddress"
        );

        await queryRunner.dropTable("athleteResponsible");
    }

}
