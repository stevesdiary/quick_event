import express, { Express } from "express";
import bodyParser from "body-parser";
import cors from "cors";
import eventsRoute from "./routes/events"
const app: Express = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/events", eventsRoute);

app.get('/hello', (req, res, next) => {
   return res.status(200).json({
      message: "Welcome to Quick events!"
   });
});

export default app;