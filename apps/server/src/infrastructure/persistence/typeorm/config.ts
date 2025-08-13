import { registerAs } from "@nestjs/config";
import { DataSource, DataSourceOptions } from "typeorm";

const config = {
    logging: true,
    type: 'postgres',
    host: process.env.DATABASE_HOST,
    port: process.env.DATABASE_PORT,
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    entities: ["dist/modules/**/infrastructure/persistence/typeorm/schemas/*.schema.js"],
    migrations: ["dist/infrastructure/persistence/typeorm/migrations/*.js"],
    synchronize: false,
    migrationsTableName: 'typeorm_migrations'
}

export default registerAs('typeorm', () => config)
export const connectionSource = new DataSource(config as DataSourceOptions);