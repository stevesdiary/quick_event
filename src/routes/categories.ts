import { ErrorHandler } from "../../utils/ErrorHandler";
import { FileUploader } from "../middlewares/FileUploader";
import CategoryController  from "../controllers/CategoryController";
import { EventService } from "../services/EventService";
import router from "./events";
import { CategoryService } from "../services/CategoryService";


router.post("/category", ErrorHandler.handleErrors(CategoryController.createCategory));
router.get("/categories", ErrorHandler.handleErrors(CategoryController.getCategories))
router.delete("/category/:id", ErrorHandler.handleErrors(CategoryController.deleteCategory));
// router.put("/category/:id", ErrorHandler.handleErrors(CategoryController.updateCategory));
export default router;