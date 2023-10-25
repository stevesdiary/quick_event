import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateEventsTable1696947528039 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "events",
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
                        name: "category_id",
                        type: "varchar(36)",
                        isNullable: false,
                    },
                    {
                        name: "organizer_id",
                        type: "varchar(36)",
                        isNullable: false,
                    },
                    {
                        name: "merchant_id",
                        type: "varchar(36)",
                        isNullable: false
                    },
                    {
                        name: "banner",
                        type: "varchar(200)",
                        isNullable: true
                    },
                    {
                        name: "description",
                        type: "varchar(100)",
                        isNullable: true
                    },
                    {
                        name: "start_date",
                        type: "datetime",
                        length: "6",
                        isNullable: false
                    },
                    {
                        name: "end_date",
                        type: "datetime",
                        length: "6",
                        isNullable: false
                    },
                    {
                        name: "thumbnail",
                        type: "varchar",
                        length: "200",
                        isNullable: true
                    },
                    {
                        name: "time",
                        type: "time",
                        isNullable: false
                    },
                    {
                        name: "event_type",
                        type: "varchar",
                        length: "20",
                        isNullable: false,
                    },
                    {
                        name: "event_name",
                        type: "varchar",
                        length: "80",
                        isNullable: false
                    },
                    {
                        name: "venue",
                        type: "varchar",
                        length: "200",
                        isNullable: false
                    },
                    {
                        name: "instagram",
                        type: "varchar",
                        length: "30",
                        isNullable: true
                    },
                    {
                        name: "facebook",
                        type: "varchar",
                        length: "30",
                        isNullable: true
                    },
                    {
                        name: "twitter",
                        type: "varchar",
                        length: "30",
                        isNullable: true
                    },
                    {
                        name: "event_email",
                        type: "varchar",
                        length: "25",
                        isNullable: false
                    },
                    {
                        name: "portrait_banner",
                        type: "varchar",
                        length: "200",
                        isNullable: true
                    },
                    {
                        name: "landscape_banner",
                        type: "varchar",
                        length: "200",
                        isNullable: true
                    },
                    {
                        name: "video",
                        type: "varchar",
                        length: "200",
                        isNullable: true
                    },
                    {
                        name: "sell",
                        type: "tinyint",
                        isNullable: false
                    },
                    {
                        name: "payment_status",
                        type: "varchar",
                        length: "20",
                        isNullable: false,
                    },
                    {
                        name: "service_charge_fom",
                        type: "varchar",
                        length: "20",
                        isNullable: false,
                    },
                    {
                        name: "service_fee",
                        type: "varchar",
                        length: "10",
                        isNullable: false,
                        default: process.env.SERVICE_FEE
                    },
                    {
                        name: "multi_day",
                        type: "tinyint",
                        isNullable: true,
                        default: 1
                    },
                    {
                        name: "status",
                        type: "tinyint",
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
        await queryRunner.dropTable("events")
    }

}
