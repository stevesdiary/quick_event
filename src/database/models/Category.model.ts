import { AppDataSource } from "../data-source";
import { Category as CategoryEntity } from "../entities/Categories";


export default new class CategoryModel {
   constructor() {}

   async findCategory(category: Partial<CategoryEntity>): Promise<CategoryEntity | null> {
      return await AppDataSource.manager.findOneBy(CategoryEntity, category);
   }

   async createCategory(category: Partial<CategoryEntity>) {
      AppDataSource.manager.create(CategoryEntity, category);
      return await AppDataSource.manager.save(category);
   }

   async findCategories(category: Partial<CategoryEntity>): Promise<CategoryEntity[]> {
      return await AppDataSource.manager.findBy(CategoryEntity, category);
   }
}

