import { Request, Response } from "express";
import { AppDataSource } from "../database/data-source";
import { Event } from "../database/entities/Event";

export class EventsController {
   async getEvents(req: Request, res: Response) {
      const events = await AppDataSource.getRepository(Event).find();
      return res.status(200).json({
         success: true,
         message: "Fethced events successfully",
         data: events,
      })
   }
}