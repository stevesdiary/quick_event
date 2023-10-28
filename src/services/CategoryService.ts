import { EntityManager, Repository, Between } from 'typeorm';
import { Category } from '../database/entities/Categories';
import { AppDataSource } from '../database/data-source';
import { ResponseUtl } from '../../utils/Response';
import { Response, Request, response } from 'express';
export class CategoryService {
   constructor(private readonly dbManager: EntityManager) {}
 
   async createCategory(category: Category): Promise<Category> {
     const newCategory = await this.dbManager.save(category);
     return newCategory;
   }
 
   async getCategories(): Promise<Category[]> {
     const categories = await this.dbManager.find(Category);
     return categories;
   }
 
   async deleteCategory(categoryId: number): Promise<void> {
     await this.dbManager.delete(Category, categoryId);
   }
 }