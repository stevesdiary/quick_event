import express, { Express, NextFunction, Request, Response } from "express";
import bodyParser from "body-parser";
import cors from "cors";
import eventsRoute from "./routes/events"
import { ResponseUtl } from "../utils/Response";
import { EntityNotFoundError } from "typeorm";
import { error } from "console";
import { ErrorHandler } from "../utils/ErrorHandler";
const app: Express = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", eventsRoute);



app.get('/hello', (req, res, next) => {
   return res.status(200).json({
      message: "Welcome to Quick events!"
   });
});
// Define a middleware function to handle the errors
app.use((err: any, req: Request, res: Response, next: NextFunction)=> {
   console.error(err);
   if (err instanceof EntityNotFoundError){
      return ResponseUtl.sendError(res, "Item or toute you are looking for does not exist", 404, err )
   }
   if (err.message === "Invalid file type") {
      return ResponseUtl.sendError(res, "Invalid file type", 422, err)
   }
   return res.status(500).json({
      success: false,
      message: "Item or page you are looking for does not exist",
      err
   });
});

app.use("*", (req: Request, res: Response) => {
   // console.error(error)
   return res.status(404).json({
      success: false,
      message: "Invalid route",
   })
});

// app.use(ErrorHandler.handleErrors);
export default app;