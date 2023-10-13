import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateUsersTable1697113792485 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "users",
                columns: [
                   {
                        name: "user_id",
                        type: "varchar",
                        isGenerated: true,
                        isPrimary: true,
                        isNullable: false,
                        generationStrategy: "uuid",
                        // default: "uuid()"
                   },
                   {
                    name: "first_name",
                    type: "varchar(15)",
                    isNullable: false,
                    },
                    {
                        name: "last_name",
                        type: "varchar(15)",
                        isNullable: false,
                    },
                    {
                        name: "email",
                        type: "varchar(25)",
                        isNullable: false
                    },
                    {
                        name: "phone_number",
                        type: "integer",
                        isNullable: false
                    },
                    {
                        name: "referral_code",
                        type: "varchar(30)",
                        isNullable: true
                    },
                    {
                        name: "status",
                        type: "tinyint",
                        isNullable: false
                    },
                    {
                        name: "service_charge_type",
                        type: "varchar(20)",
                        isNullable: false
                    },
                    {
                        name: "createdAt",
                        type: "datetime",
                        default: "now()",
                        isNullable: false
                    },  
                    {
                        name: "updatedAt",
                        type: "datetime",
                        default: "now()",
                        isNullable: true
                    },  
                ]
            }),
            true
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("users")
    }

}
