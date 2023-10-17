import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateTicketsTable1697113836898 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "tickets",
                columns: [
                    {
                        name: "ticket_id",
                        type: "varchar",
                        isPrimary: true,
                        isGenerated: true,
                        isNullable: false,
                        generationStrategy: "uuid",
                    },
                    {
                        name: "user_id",
                        type: "varchar(36)",
                        isNullable: false,
                    },
                    {
                        name: "attender_id",
                        type: "varchar(36)",
                        isNullable: false,
                    },
                    {
                        name: "package_id",
                        type: "varchar(36)",
                        isNullable: false
                    },
                    {
                        name: "merchant_id",
                        type: "varchar(36)",
                        isNullable: true
                    },
                    {
                        name: "code",
                        type: "integer",
                        isNullable: false
                    },
                    {
                        name: "amount",
                        type: "tinyint",
                        isNullable: false
                    },
                    {
                        name: "amount_paid",
                        type: "tinyint",
                        isNullable: false
                    },
                    {
                        name: "status",
                        type: "varchar(10)",
                        isNullable: false
                    },
                    {
                        name: "source",
                        type: "varchar",
                        isNullable: false
                    },
                    {
                        name: "payment_method",
                        type: "varchar",
                        isNullable: false
                    },
                    {
                        name: "reference",
                        type: "varchar",
                        isNullable: false
                    },
                    {
                        name: "qrcode",
                        type: "varchar",
                        isNullable: false
                    },
                    {
                        name: "credited",
                        type: "tinyint",
                        isNullable: false
                    },
                    {
                        name: "debited",
                        type: "varchar",
                        isNullable: false
                    },
                    {
                        name: "charge_ref",
                        type: "varchar",
                        isNullable: false
                    },
                    {
                        name: "merchant_fund_ref",
                        type: "varchar",
                        isNullable: false
                    },
                    {
                        name: "merchant_funded",
                        type: "bool",
                        isNullable: false
                    },
                ]
            }),
            true
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("tickets")
    }

}
