import { AppDataSource } from "../data-source"
import { Event as EventEntity } from "../entities/Event"

export default new class EventModel {

   async createEvent(event: Partial<Event>, isBulkCreate: boolean) {
      
   }

   async findEvent(event: Partial<EventEntity>) {
      return await AppDataSource.manager.findOne(EventEntity, {
         where: { ...event },
         relations: {
            package: true
         }
      });
   }

   async findEvents(event: Partial<EventEntity>) {
      return await AppDataSource.manager.find(EventEntity, { 
         where: { ...event },
         relations: {
            package: true,
            ticket: true
         }
       })
   }

   async updateEvent(query: Partial<Event>, data: Partial<Event>) {

   }
   
}