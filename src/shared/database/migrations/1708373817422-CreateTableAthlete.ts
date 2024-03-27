import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class CreateTableAthlete1708373817422 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "athlete",
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
                        name: "bornDate",
                        type: "date",
                    },
                    {
                        name: "gender",
                        type: "varchar"
                    },
                    {
                        name: "email",
                        type: "varchar",
                        isNullable: true,
                    },
                    {
                        name: "phoneNumber",
                        type: "varchar",
                        isNullable: true,
                    },
                    {
                        name: "profession",
                        type: "varchar",
                        isNullable: true,
                    },
                    {
                        name: "maritalStatus",
                        type: "varchar",
                        isNullable: true,
                    },
                    {
                        name: "status",
                        type: "boolean",
                    },
                    {
                        name: "addressId",
                        type: "uuid",
                        isNullable: true,
                    },
                    {
                        name: "athleteResponsibleId",
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
            "athlete",
            new TableForeignKey({
                name: "FKAddress",
                referencedTableName: "address",
                referencedColumnNames: ["id"],
                columnNames: ["addressId"],
                onDelete: "SET NULL",
                onUpdate: "SET NULL"
            }),
        );

        await queryRunner.createForeignKey(
            "athlete",
            new TableForeignKey({
                name: "FKAthleteResponsible",
                referencedTableName: "athleteResponsible",
                referencedColumnNames: ["id"],
                columnNames: ["athleteResponsibleId"],
                onDelete: "SET NULL",
                onUpdate: "SET NULL"
            }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey(
            "athlete",
            "FKAddress"
        );

        await queryRunner.dropForeignKey(
            "athlete",
            "FKAthleteResponsible"
        );

        await queryRunner.dropTable("athlete");
    }
}
