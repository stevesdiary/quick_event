import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreatePackagesTable1697113416842 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "packages",
                columns: [
                    {
                        name: "package_id",
                        type: "varchar",
                        isPrimary: true,
                        isNullable: false,
                        isGenerated: true,
                        generationStrategy: "uuid",
                    },
                    {
                        name: "features_id",
                        type: "varchar(36)",
                        isPrimary: true,
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
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("packages");
    }

}
