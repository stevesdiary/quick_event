import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateEventDatesTable1697210695630 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "event_dates",
                columns: [
                    {
                        name: "id",
                        type: "varchar",
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: "uuid",
                        isNullable: false,
                    },
                    {
                        name: "event_id",
                        type: "varchar(36)",
                        isNullable: false,

                    }
                ]
            }),
            true
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("event_dates")
    }

}
