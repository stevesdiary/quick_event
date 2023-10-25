import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm"

export class CreatePackagesTable1697113416842 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "packages",
                columns: [
                    {
                        name: "id",
                        type: "varchar",
                        isPrimary: true,
                        isNullable: false,
                        isGenerated: true,
                        generationStrategy: "uuid",
                    },
                    {
                        name: "event_id",
                        type: "varchar(36)",
                        isNullable: false,
                    },
                    {
                        name: "package_name",
                        type: "varchar(36)",
                        isNullable: false,
                    },
                    {
                        name: "description",
                        type: "varchar(50)",
                        isNullable: true,
                    },
                    {
                        name: "banner",
                        type: "varchar(250)",
                        isNullable: true,
                    },
                    {
                        name: "price",
                        type: "tinyint",
                        isNullable: false,
                    },
                    {
                        name: "discounted_price",
                        type: "tinyint",
                        isNullable: false,
                        default: 0
                    },
                    {
                        name: "status",
                        type: "tinyint",
                        isNullable: false,
                        default: 1
                    },
                    {
                        name: "active_at",
                        type: "datetime",
                        isNullable: false,
                    },
                    {
                        name: "expire_at",
                        type: "datetime",
                        isNullable: false,
                    },
                    {
                        name: "limit",
                        type: "tinyint",
                        isNullable: false,
                    },
                    {
                        name: "thumbnail",
                        type: "varchar(250)",
                        isNullable: true,
                    },
                ]
            }),
            true
        );

        await queryRunner.createForeignKey(
            "package",
            new TableForeignKey({
                columnNames: ["event_id"],
                referencedColumnNames: ["id"],
                referencedTableName: "events",
                onDelete: "CASCADE",
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("packages");
    }

}
