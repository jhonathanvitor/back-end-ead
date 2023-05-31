import "reflect-metadata";
import { DataSource } from "typeorm";
import { CreateCategories1685564667563 } from "./migrations/1685564667563-CreateCategories";

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "root",
    database: "backendead",
    synchronize: true,
    logging: false,
    entities: [],
    migrations: [CreateCategories1685564667563],
    subscribers: [],
});
