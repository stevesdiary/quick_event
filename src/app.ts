import express, { Express } from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mysql from "mysql2";
const app: Express = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/hello', (req, res, next) => {
   return res.status(200).json({
      message: "Welcome to Quick events!"
   });
});

export default app;