import { Request, Response } from "express";
import { AppDataSource } from "../database/data-source";
import { Event } from "../database/entities/Event";
import { ResponseUtl } from "../../utils/Response";
import { Paginator } from "../database/Paginator";
import { CreateEventDTO, UpdateEventDTO } from "../dtos/CreateEventDTO";
import { validate, validateOrReject } from "class-validator";
import { UUID } from "typeorm/driver/mongodb/bson.typings";
import { plainToClass } from "class-transformer";
import { EVENTS } from "../constants/DBTable";

export class EventsController {
   async getEvents(req: Request, res: Response): Promise<Response> {
      const builder = AppDataSource.getRepository(Event).createQueryBuilder()
      .orderBy("createdAt", "DESC");
      const {records: events, paginationInfo} = await Paginator.paginate(builder, req)
      return ResponseUtl.sendResponse(res, "Fetched events successfully", events, paginationInfo)
   }

   async getEvent(req: Request, res: Response): Promise<Response> {
      const { id } = req.params;
      const event = await AppDataSource.getRepository(Event).findOneByOrFail({
         id: String(id),
      });
      return ResponseUtl.sendResponse<Event>(res, "Fetched event successfully", event, null)

   }
   async createEvent(req: Request, res: Response): Promise<Response> {
      // eventData.portrait_banner = req.file?.filename;
      const dto = plainToClass(CreateEventDTO, req.body)
      const errors = await validate(dto);
      if (errors.length > 0) {
         return ResponseUtl.sendError(res, "Invalid data", 422, errors);
      }

      const repo = AppDataSource.getRepository(Event);
      const event = repo.create(dto);
      await repo.save(event);

      return ResponseUtl.sendResponse(res, "New event created successfully!", event, 201)

   }
   async updateEvent(req: Request, res: Response) {
      
      const { eventData } = req.body;
      let  {event_name, description, event_type, start_date, end_date} = eventData
      const event = await AppDataSource.getRepository(Event).findOneByOrFail({
         event_name: String(),
         description: String(),
         event_type: String(),
         // start_date: Date(),  
      });
      const dto = new UpdateEventDTO();
      Object.assign(dto, eventData);
      // dto.event_name = String

      await validateOrReject(dto)
      const errors = await validate(dto);

      const repo = AppDataSource.getRepository(Event);
      repo.merge(event, eventData)
      const updatEvent = await repo.findOneByOrFail({
         id: String()
      });
      repo.merge(updatEvent, eventData)
      const eventUpdate = repo.update(EVENTS, eventData);
      await repo.save(event);

      return ResponseUtl.sendResponse<Event>(res, "Event updated successfully!", event, 200)
   }
   async deleteEvent(req: Request, res: Response) {
      const eventDelete = await AppDataSource.getRepository(Event).delete({
      });
      // return ResponseUtl.sendResponse<Event>(res, "Event eleted successfully",eventDelete, null)
   }
}