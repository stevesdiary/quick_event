import * as dotenv from "dotenv";
import app from "./app";
import { AppDataSource } from "./database/data-source";
dotenv.config();
const PORT = process.env.PORT || 2000;

AppDataSource.initialize().then(async () => {
   console.log("Database connection successful!")
}).catch((err) => console.error(err))
app. listen(PORT, () => {
   console.log(`App running on port ${PORT}`)
});
