import { DataSource, EntityManager } from "typeorm";
import { Category } from "../database/entities/Categories";

export class CategoryService {
  static updateCategory(updateCategory: any): import("express-serve-static-core").RequestHandler<import("express-serve-static-core").ParamsDictionary, any, any, import("qs").ParsedQs, Record<string, any>> {
     throw new Error("Method not implemented.");
  }
  constructor(private readonly entityManager: EntityManager) {}

  async createCategory(category: Category): Promise<Category> {
    const newCategory = await this.entityManager.save(category);
    return newCategory;
  }

  async getCategories(): Promise<Category[]> {
    const categories = await this.entityManager.find(Category);
    return categories;
  }

  async updateCategory(category: Category): Promise<Category> {
    const updatedCategory = await this.entityManager.save(category);
    return updatedCategory;
  }

  async deleteCategory(categoryId: number): Promise<void> {
    await this.entityManager.delete(Category, categoryId);
  }
}

 
//    async getCategories(): Promise<Category[]> {
//      const categories = await this.dbManager.find(Category);
//      return categories;
//    }
 
//    async deleteCategory(categoryId: number): Promise<void> {
//      await this.dbManager.delete(Category, categoryId);
//    }
//  }