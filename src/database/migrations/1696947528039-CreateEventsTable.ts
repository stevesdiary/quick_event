import { MigrationInterface, QueryRunner, Table } from "typeorm"
import { EVENTS } from "../../constants/DBTable"

export class CreateEventsTable1696947528039 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: EVENTS,
                columns: [
                    {
                        name: "id",
                        type: "varchar",
                        isPrimary: true,
                        generationStrategy: "uuid",
                        isNullable: false,
                        // default: "uuidv4()"
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
                        type: "char(36)",
                        isNullable: false
                    },
                    {
                        name: "banner",
                        type: "char(200)",
                        isNullable: true
                    },
                    {
                        name: "description",
                        type: "char(100)",
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
                        isNullable: true
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
                        isUnique: true,
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
                        isNullable: true
                    },
                    {
                        name: "payment_status",
                        type: "varchar",
                        length: "20",
                        isNullable: true,
                    },
                    {
                        name: "service_charge",
                        type: "varchar",
                        length: "20",
                        isNullable: true,
                    },
                    {
                        name: "service_fee",
                        type: "varchar",
                        length: "10",
                        isNullable: true
                    },
                    {
                        name: "multi_day",
                        type: "tinyint",
                        isNullable: true
                    },
                    {
                        name: "status",
                        type: "tinyint",
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
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable(EVENTS)
    }

}
