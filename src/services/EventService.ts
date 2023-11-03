import { DataSource, EntityManager, getManager } from "typeorm";
import { Event } from "../database/entities/Event";
import { Package } from "../database/entities/Package";
import { Feature } from "../database/entities/Features";
import { Event_date } from "../database/entities/Event_date";
import { ErrorHandler } from "../../utils/ErrorHandler";
import { ResponseUtl } from "../../utils/Response";
import { Category } from "../database/entities/Categories";
import { Organizer } from "../database/entities/Organizer";
import { v4 as uuid } from "uuid";
import { CreateEventDTO, UpdateEventDTO } from "../dtos/CreateEventDTO";
import { AppDataSource } from "../database/data-source";


// export class EventService {
//   constructor(private readonly entityManager: EntityManager) {}

//   async createEvent(eventDTO: CreateEventDTO): Promise<Event> {
//     const event = this.entityManager.create(Event, );
//     await this.entityManager.save(event);

//     return event;
//   }

//   async updateEvent(id: number, eventDTO: UpdateEventDTO): Promise<Event> {
//     const eventToUpdate = await this.entityManager.findOneByOrFail(Event, { id });
//     this.entityManager.merge(eventToUpdate, eventDTO);
//     await this.entityManager.save(eventToUpdate);

//     return eventToUpdate;
//   }
//   async deleteEvent(eventDTO: deleteEvent)
// }
export class EventService {
  constructor(private readonly entityManager: EntityManager) {}

  async getEvents(): Promise<Event[]> {
    const events = await this.entityManager.find(Event);

    return events;
  }
}

// export class EventService {
//   constructor(private entityManager: EntityManager) {}

//   // Create a category
//   async createCategory(category: Category): Promise<Category> {
//     const newCategory = await this.entityManager.save(category);
//     return newCategory;
//   }

//   // Fetch all categories
//   async getCategories(): Promise<Category[]> {
//     const categories = await this.entityManager.find(Category);
//     return categories;
//   }

//   // Update a category
//   async updateCategory(category: Category): Promise<Category> {
//     const updatedCategory = await this.entityManager.save(category);
//     return updatedCategory;
//   }

//   // Delete a category
//   async deleteCategory(categoryId: number): Promise<void> {
//     await this.entityManager.delete(Category, categoryId);
//   }
// }