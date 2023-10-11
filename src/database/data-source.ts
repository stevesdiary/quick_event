import * as dotenv from "dotenv";
import { DataSource } from "typeorm";
import {Event} from "./entities/Event"
dotenv.config();

export const AppDataSource = new DataSource({
   type: "mysql",
   host: process.env.DB_HOST || "127.0.0.1",
   port: Number (process.env.DB_PORT) || 3306,
   username: process.env.DB_USERNAME || "root",
   password: process.env.DB_PASSWORD, // || "password",
   database: process.env.DB_DATABASE, //|| "quick_event",
   logging: true,
   synchronize: false,
   entities: [Event],
   subscribers: [],
   migrations: ["src/database/migrations/*.ts"],
});