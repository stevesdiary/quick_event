import { EntityManager } from "typeorm";
import { Event } from "./entities/Event";
import { Package } from "./entities/Package";
import { Feature } from "./entities/Features";
import { Event_date } from "./entities/Event_date";
import { ErrorHandler } from "../../utils/ErrorHandler";
import { ResponseUtl } from "../../utils/Response";
import { Category } from "./entities/Categories";
import { Organizer } from "./entities/Organizer";
import { v4 as uuid } from "uuid";
import { CreateEventDTO } from "../dtos/CreateEventDTO";
import { AppDataSource } from "./data-source";


export class EventService {
   constructor(private entityManager: EntityManager) { }
   async createCategory(req: Request, res: Response) {
      const queryRunner = AppDataSource.createQueryRunner()
      await queryRunner.connect()
      
   }
   // async createEventWIthPackageAndFeatures(req: Request, res: Response) {
   //    const categoryId = await AppDataSource.getRepository(Category).findOne({
   //       category_name: String(req.body.categories.category_name)
   //    });

   //    const data: CreateEventDTO = req.body;
   //    const { 
   //       event_name, 
   //       description, 
   //       video, 
   //       start_date, 
   //       end_date, 
   //       event_type, 
   //       instagram, 
   //       facebook, 
   //       twitter, 
   //       event_email, 
   //       portrait_banner, 
   //       landscape_banner, 
   //       sell, payment_status, 
   //       service_charge, 
   //       service_fee, 
   //       multi_day, 
   //       status, 
   //       organizer_id, 
   //       organizer_name, 
   //       email,
   //       organizer.facebook,
   //       organizer.instagram,
   //       organizer.twitter,
   //       image,
   //    } = data.description;
   //    try {
   //       await this.entityManager.transaction(async transactionalEntityManager => {
   //          const newOrganizer = new Organizer();
   //          newOrganizer.id = uuid();
   //          newOrganizer.organizer_name = organizer_name;
   //          newOrganizer.email = email;
   //          newOrganizer.facebook = facebook
   //          newOrganizer.instagram = instagram
   //          newOrganizer.twitter = twitter
   //          newOrganizer.image = image;

            
   //          const newEvent = new Event();
   //          newEvent.id = uuid();
   //          newEvent.event_name = event_name;
   //          newEvent.organizer_id =  newOrganizer.id;
   //          newEvent.category_id = categoryId
   //          newEvent.description = description

   //          const newPackage = new Package();
   //          newPackage.name = package_name;
   //          newPackage.price = req.body.package.price;
   //          newPackage.event_id = newEvent.id

   //          const feature = new Feature();

   //          const event_date = new Event_date();

   //          await transactionalEntityManager.save(Event)
   //          await transactionalEntityManager.save(Package)
   //          await transactionalEntityManager.save(Feature)
   //          await transactionalEntityManager.save(Event_date)
   //       })
   //    } catch (error) {
   //       return ResponseUtl.sendError(res, "An error occourred", error, 500)
   //    }
   // }
}