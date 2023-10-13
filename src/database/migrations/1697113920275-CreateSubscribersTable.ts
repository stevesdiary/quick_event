import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateSubscribersTable1697113920275 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "subscribers",
                columns: [
                    {
                        name: "subscriber_id",
                        type: "varchar",
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: "uuid",
                        isNullable: false,
                        // default: "uuid()"
                    },
                    {
                        name: "user_id",
                        type: "varchar(36)",
                        isNullable: false,
                    },
                    {
                        name: "email",
                        type: "varchar(36)",
                        isNullable: false,
                    },
                    {
                        name: "subscribed",
                        type: "tinyint",
                        isNullable: false,
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
        await queryRunner.dropTable("subscribers")
    }

}
