import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateFeaturesTable1697113727464 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "features",
                columns: [
                    {
                        name: "features_id",
                        type: "varchar",
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: "uuid",
                        isNullable: false,
                        // default: "uuid()"

                    },
                    {
                        name: "package_id",
                        type: "varchar(36)",
                        isNullable: false,
                    },
                    {
                        name: "tag",
                        type: "varchar(20)",
                        isNullable: false,
                    },
                    {
                        name: "amount",
                        type: "tinyint",
                        isNullable: false
                    },
                    {
                        name: "percentage",
                        type: "int",
                        isNullable: false
                    },
                    {
                        name: "limit",
                        type: "int",
                        isNullable: false
                    },
                    {
                        name: "status",
                        type: "tinyint",
                        isNullable: false,
                        default: 1,
                    },
                    {
                        name: "active_at",
                        type: "datetime",
                        isNullable: false
                    },
                    {
                        name: "expired_at",
                        type: "datetime",
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
        await queryRunner.dropTable("features")
    }

}
