import { MigrationInterface, QueryRunner } from "typeorm";

export class default1658277333706 implements MigrationInterface {
    name = 'default1658277333706'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "persons" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "born_date" character varying NOT NULL, CONSTRAINT "PK_74278d8812a049233ce41440ac7" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "persons"`);
    }

}
