
import { DataSource } from 'typeorm';
import { User } from "src/accounts/entities/user.entity";
import { Order } from "src/orders/entities/order.entity";

export const entities = [
    User,
    Order,
]

export const REPOSITORY_TOKENS = Object.fromEntries(
    entities.map((e) => [e.name, `${e.name.toUpperCase()}_REPOSITORY`])
);

export const dataProviders = entities.map((e) => ({
    provide: REPOSITORY_TOKENS[e.name],
    useFactory: (dataSource: DataSource) => dataSource.getRepository(e),
    inject: [DataSource],
}));