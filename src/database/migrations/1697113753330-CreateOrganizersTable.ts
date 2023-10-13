import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateOrganizersTable1697113753330 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "organizers",
                columns: [
                    {
                        name: "organizer_id",
                        type: "varchar",
                        isPrimary: true,
                        isGenerated: true,
                        isNullable: false,
                        generationStrategy: "uuid",
                    },
                    {
                        name: "organizer_name",
                        type: "varchar(36)",
                        isNullable: false,
                    },
                    {
                        name: "organizer_email",
                        type: "varchar(36)",
                        isNullable: false,
                    },
                    {
                        name: "instagram",
                        type: "varchar(100)",
                        isNullable: true,
                    },
                    {
                        name: "facebook",
                        type: "varchar(100)",
                        isNullable: true,
                    },
                    {
                        name: "twitter",
                        type: "varchar(100)",
                        isNullable: true,
                    },
                    {
                        name: "image",
                        type: "varchar(100)",
                        isNullable: true,
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
        await queryRunner.dropTable("organizers");
    }

}
