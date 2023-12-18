import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateTodoTable1702905425392 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            CREATE TABLE todo (
                id SERIAL PRIMARY KEY,
                title VARCHAR NOT NULL,
                description TEXT,
                isDone BOOLEAN DEFAULT false
            );
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE todo`);
  }
}
