import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateLikesTable1697113818348 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "likes",
                columns: [
                    {
                        name: "like_id",
                        type: "varchar",
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: "uuid",
                        isNullable: false,
                        // default: "uuid()"
                    },
                    {
                        name: "event_id",
                        type: "varchar(36)",
                        isNullable: false,
                    },
                    {
                        name: "user_id",
                        type: "varchar(36)",
                        isNullable: false,
                    },
                    {
                        name: "liked",
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
        await queryRunner.dropTable("likes")
    }

}
