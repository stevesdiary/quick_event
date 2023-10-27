import { EntityManager, Repository, Between } from 'typeorm';
import { Category } from '../database/entities/Categories';
import { AppDataSource } from '../database/data-source';
import { ResponseUtl } from '../../utils/Response';
import { Response, Request, response } from 'express';
export class CategoryService {
   static getCategories(getCategories: any): import("express-serve-static-core").RequestHandler<import("express-serve-static-core").ParamsDictionary, any, any, import("qs").ParsedQs, Record<string, any>> {
      throw new Error("Method not implemented.");
   }
   
   constructor(private readonly dbManager: EntityManager, categoryService: CategoryService) {}

   async createCategory(req: Request, res: Response) {
      const newCategory: Category = req.body;
      await this.dbManager.save(newCategory);
      return ResponseUtl.sendResponse(res, "Categories", newCategory, 201);
   }

   async getCategories(): Promise<Category[]> {
       const categories = await this.dbManager.find(Category);
       return categories;
   }

   async deleteCategory(req:Request, res: Response) {
      const id:string = req.params.id;
      await this.dbManager.delete(Category, id);
      return res.status(204).json({message: "Category deleted"});
   }
   // private dbManager: EntityManager;
   // static getCategories: any;
 
   // constructor() {
   //   this.dbManager = AppDataSource.manager;
   // }
 
   // async createCategory(category: Partial<Category>): Promise<Partial<Category>> {
 
   //   const newCategory = this.dbManager.create(Category, category);
   //   await this.dbManager.save(newCategory);

   //   return newCategory;

   // }

   // async getCatgories(res: Response, category: Partial<Category[]>): Promise<Partial<Category>> {
   //    const category = this.dbManager.find(Category)
   //    await this.dbManager.find()

   //    return ResponseUtl.sendResponse(res, "Categories", categories);
   // }
}