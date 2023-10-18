import { Request, Response } from "express";
import { AppDataSource } from "../database/data-source";
import { Event } from "../database/entities/Event";
import { ResponseUtl } from "../../utils/Response";
import { Paginator } from "../database/Paginator";

export class EventsController {
   async getEvents(req: Request, res: Response) {
      const builder = await AppDataSource.getRepository(Event).createQueryBuilder()
      .orderBy("event_id", "DESC");
      const {records: events, paginationInfo} = await Paginator.paginate(builder, req)
      return ResponseUtl.sendResponse(res, "Fetched events successfully", events, paginationInfo)
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