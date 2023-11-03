import { Request, Response } from "express";
import { AppDataSource } from "../database/data-source";
import { Event } from "../database/entities/Event";
import { ResponseUtl } from "../../utils/Response";
import { Paginator } from "../database/Paginator";
import { plainToClass } from "class-transformer";
import { Category } from "../database/entities/Categories";
import { CategoryService } from "../services/CategoryService";
import { UUID } from "crypto";

export class CategoryController {
      async createCategory(req: Request, res: Response) {
         const { category_name, banner, status, image_logo, description } = req.body;
   
         const category = new Category();
         
         category.category_name = category_name;
         category.banner = banner;
         category.description = description;
         category.image_logo = image_logo;
         category.status = status;
   
         await category.save();
   
         return res.status(201).json(category);
      }
      constructor(private readonly categoryService: CategoryService) {}
   
      async createCategor(req: Request, res: Response): Promise<Response> {
      const category = req.body as Category;
   
      const newCategory = await this.categoryService.createCategory(category);
   
      return ResponseUtl.sendResponse(res, "New category created successfully!", newCategory, 201);
      }
   
      async getCategories(req: Request, res: Response): Promise<Response> {
      const categories = await this.categoryService.getCategories();
   
      return ResponseUtl.sendResponse(res, "Fetched categories successfully!", categories, null);
      }
   
      async updateCategory(req: Request, res: Response): Promise<Response> {
      const category = req.body as Category;
   
      const updatedCategory = await this.categoryService.updateCategory(category);
   
      return ResponseUtl.sendResponse(res, "Category updated successfully!", updatedCategory, 200);
      }
   
      async deleteCategory(req: Request, res: Response): Promise<Response> {
      const categoryId: string = (req.params.id);
   
      await this.categoryService.deleteCategory(categoryId);
   
      return ResponseUtl.sendResponse(res, "Category deleted successfully!", null, 204);
      }
   


}
