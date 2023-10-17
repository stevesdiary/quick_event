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
         event_id: String(id),
      });
      return ResponseUtl.sendResponse<Event>(res, "Fetched event successfully", event, null)

   }
   async createEvent(req: Request, res: Response) {
      const { event_name, description, event_type, start_date, end_date,  } = req.body;
      const event = await AppDataSource.getRepository(Event).findOneByOrFail({
         event_name: String(),
         description: String(),
         event_type: String(),
         // start_date: Date(),
         
         
      });
      return ResponseUtl.sendResponse<Event>(res, "Fetched event successfully", event, null)

   }
   async updateEvent(req: Request, res: Response) {
      const { event_name, description, event_type, start_date, end_date,  } = req.body;
      const event = await AppDataSource.getRepository(Event).findOneByOrFail({
         event_name: String(),
         description: String(),
         event_type: String(),
         // start_date: Date(),  
      });
      return ResponseUtl.sendResponse<Event>(res, "Fetched event successfully", event, null)
   }
   async deleteEvent(req: Request, res: Response) {
      const eventDelete = await AppDataSource.getRepository(Event).delete({
      });
      // return ResponseUtl.sendResponse<Event>(res, "Event eleted successfully",eventDelete, null)
   }
}