import { TypeOrmModule } from "@nestjs/typeorm";
import { entities } from "./data-source.provider";

export const ORM = TypeOrmModule.forRoot({
    type: 'postgres',
    url: process.env.DATABASE_URL!,
    entities,
    synchronize: true,
});