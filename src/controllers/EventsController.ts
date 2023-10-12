import { Request, Response } from "express";
import { AppDataSource } from "../database/data-source";
import { Event } from "../database/entities/Event";
import { ResponseUtl } from "../../utils/Response";

export class EventsController {
   async getEvents(req: Request, res: Response) {
      const events = await AppDataSource.getRepository(Event).find();
      return ResponseUtl.sendResponse(res, "Fethced events successfully", events, null)
   }

   async getEvent(req: Request, res: Response) {
      const { id } = req.params;
      const event = await AppDataSource.getRepository(Event).findOneByOrFail({
         id: String(id),
      });
      return ResponseUtl.sendResponse<Event>(res, "Fetched event successfully", event, null)

   }
}