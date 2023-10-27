import { Request, Response } from "express";
import { AppDataSource } from "../database/data-source";
import { Event } from "../database/entities/Event";
import { ResponseUtl } from "../../utils/Response";
import { Paginator } from "../database/Paginator";
import { plainToClass } from "class-transformer";
import { Category } from "../database/entities/Categories";

export class CategoryController {

   async getCategories(req: Request, res: Response): Promise<Response> {
      const builder = AppDataSource.getRepository(Category).createQueryBuilder().orderBy("category_name", "ASC");
      const {records: categories, paginationInfo } = await Paginator.paginate(builder, req)
      return ResponseUtl.sendResponse(res, "Fetched categories successfully", categories, paginationInfo)
   }
   
   async getCategory(req: Request, res: Response): Promise<Response> {
      const { id } = req.params;
      const category = await AppDataSource.getRepository(Category).findOneByOrFail({
         id: String(id),
      });
      return ResponseUtl.sendResponse<Category>(res, "Fetched category successfully", category, null)
   }
   // async createCategory(req: Request, res: Response): Promise<Response> {
      
   // }
}