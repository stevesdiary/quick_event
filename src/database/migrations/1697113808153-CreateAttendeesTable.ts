import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateAttendeesTable1697113808153 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "attendees",
                columns: [
                    {
                        name: "id",
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
                        isNullable: false
                    },
                    {
                        name: "first_name",
                        type: "varchar(20)",
                        isNullable: false
                    },
                    {
                        name: "last_name",
                        type: "varchar(20)",
                        isNullable: false
                    },
                    {
                        name: "email",
                        type: "varchar(25)",
                        isNullable:false
                    },
                    {
                        name: "phone_number",
                        type: "integer",
                        isNullable: false
                    },
                    {
                        name: "referral_code",
                        type: "varchar(20)",
                        isNullable: true
                    },
                    {
                        name: "status",
                        type: "tinyint",
                        isNullable: false,
                        default: 1
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
        await queryRunner.dropTable("attendees")
    }

}
