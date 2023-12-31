import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateUserTable1702907676071 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            CREATE TABLE "user" (
                "id" SERIAL PRIMARY KEY,
                "email" VARCHAR(255) UNIQUE NOT NULL,
                "password" VARCHAR(255) NOT NULL
            );
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "user"`);
  }
}
