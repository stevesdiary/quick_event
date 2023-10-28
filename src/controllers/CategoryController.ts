import { Request, Response } from "express";
import { AppDataSource } from "../database/data-source";
import { Event } from "../database/entities/Event";
import { ResponseUtl } from "../../utils/Response";
import { Paginator } from "../database/Paginator";
import { plainToClass } from "class-transformer";
import { Category } from "../database/entities/Categories";

export default new class CategoryController {

   async createCategory(req: Request, res: Response) {
      const Body = req.body as {
         id: string,
         name: string
      };

      console.log("TEST");
   }
   async getCategories(req: Request, res: Response): Promise<Response> {
      const builder = AppDataSource.getRepository(Category).createQueryBuilder().orderBy("category_name", "ASC");
      const {records: categories, paginationInfo } = await Paginator.paginate(builder, req)
      return ResponseUtl.sendResponse(res, "Fetched categories successfully", categories, paginationInfo)
   }

   async getCategory(req: Request, res: Response): Promise<Response> {
      const { id } = req.params;
      const category = await AppDataSource.getRepository(Category).findOneByOrFail({
         id:String(id),
      });
      return ResponseUtl.sendResponse<Category>(res, "Fetched category successfully", category, null)
   }
   async deleteCategory(req: Request, res: Response): Promise<Response> {
      const id = req.params.id;
      const category = await AppDataSource.getRepository(Category).delete({
         id:String(id),
      });
      return ResponseUtl.sendResponse<null>(res, "Category deleted", null, 200)
   }

   // async updateCategory(req: Request, res: Response): Promise<Response> {
   //    const id = req.params.id;
   //    const category = await AppDataSource.getRepository(Category).delete({
   //       id: String(id),
   //    });
   //    return ResponseUtl.sendResponse<Category>(res, "Category updated", category, 200)
   // }
}