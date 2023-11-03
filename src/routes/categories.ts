import { ErrorHandler } from "../../utils/ErrorHandler";
import { FileUploader } from "../middlewares/FileUploader";
import { CategoryController }  from "../controllers/CategoryController";
import { EventService } from "../services/EventService";
import { CategoryService } from "../services/CategoryService";
import { Router } from "express"
import { EntityManager } from "typeorm";

const router = Router();

const categoryController = new CategoryController(new CategoryService(EntityManager));

router.get("/category", categoryController.getCategories);
router.post("/", categoryController.createCategory);
router.put("/:id", categoryController.updateCategory);

// export default router;

// router.post("/category", ErrorHandler.handleErrors(CategoryController.createCategory));
// router.get("/categories", ErrorHandler.handleErrors(CategoryController.getCategories))
// router.delete("/category/:id", ErrorHandler.handleErrors(CategoryController.deleteCategory));
// router.put("/category/:id", ErrorHandler.handleErrors(CategoryService.updateCategory));
export default {router, CategoryController};