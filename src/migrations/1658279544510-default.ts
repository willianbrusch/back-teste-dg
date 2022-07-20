import { MigrationInterface, QueryRunner } from "typeorm";

export class default1658279544510 implements MigrationInterface {
    name = 'default1658279544510'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "persons" RENAME COLUMN "born_date" TO "birth_date"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "persons" RENAME COLUMN "birth_date" TO "born_date"`);
    }

}
