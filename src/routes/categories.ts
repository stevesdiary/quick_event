import { ErrorHandler } from "../../utils/ErrorHandler";
import { FileUploader } from "../middlewares/FileUploader";
import { CategoryController } from "../controllers/CategoryController";
import { EventService } from "../services/EventService";
import router from "./events";
import { CategoryService } from "../services/CategoryService";


router.post("/category", ErrorHandler.handleErrors(EventService.createCategory));
router.get("/categories", ErrorHandler.handleErrors(CategoryService.getCategories))
export default router;