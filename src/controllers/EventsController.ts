import { Request, Response } from "express";
import { AppDataSource } from "../database/data-source";
import { Event } from "../database/entities/Event";
import { ResponseUtl } from "../../utils/Response";
import { Paginator } from "../database/Paginator";
import { CreateEventDTO, UpdateEventDTO } from "../dtos/CreateEventDTO";
import { validate } from "class-validator";
import { plainToClass } from "class-transformer";
import { EventService } from "../services/EventService";

export class EventsController {
   static getEvents(getEvents: any): import("express-serve-static-core").RequestHandler<import("express-serve-static-core").ParamsDictionary, any, any, import("qs").ParsedQs, Record<string, any>> {
      throw new Error("Method not implemented.");
   }
   static getEvent(getEvent: any): import("express-serve-static-core").RequestHandler<import("express-serve-static-core").ParamsDictionary, any, any, import("qs").ParsedQs, Record<string, any>> {
      throw new Error("Method not implemented.");
   }
   static createEvent(createEvent: any): import("express-serve-static-core").RequestHandler<import("express-serve-static-core").ParamsDictionary, any, any, import("qs").ParsedQs, Record<string, any>> {
      throw new Error("Method not implemented.");
   }
   static updateEvent(updateEvent: any): import("express-serve-static-core").RequestHandler<import("express-serve-static-core").ParamsDictionary, any, any, import("qs").ParsedQs, Record<string, any>> {
      throw new Error("Method not implemented.");
   }
   static deleteEvent(deleteEvent: any): import("express-serve-static-core").RequestHandler<import("express-serve-static-core").ParamsDictionary, any, any, import("qs").ParsedQs, Record<string, any>> {
      throw new Error("Method not implemented.");
   }

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
   async updateEvent(req: Request, res: Response): Promise<Response> {


      const dto = plainToClass(UpdateEventDTO, req.body);
      const errors = await validate(dto);
      console.error("ERROR occoured Unable to update", errors)
      if (errors.length > 0) {
         return ResponseUtl.sendError(res, "Invalid data", 422, errors);
      }

      const repo = AppDataSource.getRepository(Event);
      const { id } = req.params;
      repo.merge(req.body)
      const eventToUpdate = await repo.findOneByOrFail({id});
      repo.merge(eventToUpdate, dto)
      await repo.save(eventToUpdate);

      return ResponseUtl.sendResponse<Event>(res, "Event updated successfully!", eventToUpdate, 200)
   }

   async deleteEvent(req: Request, res: Response): Promise<Response> {
      const { id } = req.params;
      try {
         const eventToDelete = await AppDataSource.getRepository(Event).findOneBy({id});
         const deleteEvent  = await AppDataSource.getRepository(Event).delete({id})
        if (!eventToDelete) {
          return ResponseUtl.sendResponse(res, "Event not found", null, null);
        } 
       
        else {
         await AppDataSource.getRepository(Event).remove(eventToDelete)
            return ResponseUtl.sendResponse<Event>(res, "Event deleted successfully!", eventToDelete ,200);
        }
      } catch (error) {
        return ResponseUtl.sendResponse(res, "Error deleting event", 500);
      }
    }

    async customEvent(req: Request, res: Response) {
      const Body = req.body as { name: string, image: string, description: string };
    }
}