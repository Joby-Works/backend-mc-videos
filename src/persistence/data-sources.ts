import { DataSource } from 'typeorm';
import { join } from 'path';
import * as dotenv from 'dotenv';
dotenv.config();

export const AppDataSource = new DataSource({
    type: 'postgres',
    url: process.env.DATABASE_URL!,
    entities: [__dirname + '/../**/*.entity{.ts}'],
    migrations: [join(__dirname, '/../../', 'persistense/migrations/**/*{.ts}')],
    synchronize: true,
    migrationsTableName: 'migrations',
    migrationsRun: false,
    logging: true,
});
