import * as dotenv from "dotenv";
import { DataSource } from "typeorm";
import { Event } from "./entities/Event"
import { Attendee } from "./entities/Attendee";
import { Event_date } from "./entities/Event_date";
import { Organizer } from "./entities/Organizer";
import { Category } from "./entities/Categories";
import { Package } from "./entities/Package";
import { Ticket } from "./entities/Ticket";
import { User } from "./entities/User";
import { Like } from "./entities/Like";
import { Subscriber } from "./entities/Subscriber";
import { Feature } from "./entities/Features";
import { query } from "express";
dotenv.config();

export const AppDataSource = new DataSource({
   type: "mysql",
   host: process.env.DB_HOST || "127.0.0.1",
   port: Number (process.env.DB_PORT) || 3306,
   username: process.env.DB_USERNAME || "root",
   password: process.env.DB_PASSWORD, // || "password",
   database: process.env.DB_DATABASE, //|| "quick_event",
   logging: ["query"],
   synchronize: true,
   entities: [Event, Attendee, Organizer, Category, Package, Ticket, User, Event_date, Like, Subscriber, Feature],
   subscribers: [],
   migrations: ["src/database/migrations/*.ts"],
});