import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateMerchantsTable1697113778426 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "merchants",
                columns: [
                    {
                        name: "merchant_id",
                        type: "varchar",
                        isPrimary: true,
                        isGenerated: true,
                        isNullable: false,
                        generationStrategy: "uuid",
                    },
                    {
                        name: "merchant_name",
                        type: "varchar(36)",
                        isNullable: false,
                    },
                    {
                        name: "merchant_email",
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
                        isNullable: true
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
        await queryRunner.dropTable("merchants");
    }

}
//id, organizer_name, email, facebook, 
//twitter, instagram, image, created_at,
// updated_at, deleted_at