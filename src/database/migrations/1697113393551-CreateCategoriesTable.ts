import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateCategoriesTable1697113393551 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "categories",
                columns: [
                    {
                        name: "category_id",
                        type: "varchar",
                        isPrimary: true,
                        isGenerated: true,
                        isNullable: false,
                        generationStrategy: "uuid",
                    },
                    {
                        name: "category_name",
                        type: "varchar(36)",
                        isNullable: false,
                    },
                    {
                        name: "description",
                        type: "varchar(36)",
                        isNullable: false,
                    },
                    {
                        name: "banner",
                        type: "varchar(100)",
                        isNullable: false,
                    },
                    {
                        name: "status",
                        type: "tinyint",
                        isNullable: false,
                        default: 1,
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
        await queryRunner.dropTable("categories")
    }

}
