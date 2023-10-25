import express from "express";
import { ErrorHandler } from "../../utils/ErrorHandler";
import { EventsController } from "../controllers/EventsController";
import { FileUploader } from "../middlewares/FileUploader";
import { CategoryController } from "../controllers/CategoryController";
import { EventService } from "../database/EventService";
const eventsController = new EventsController()
const router = express.Router();

router.get("/", ErrorHandler.handleErrors(eventsController.getEvents));

router.get("/:id", ErrorHandler.handleErrors(eventsController.getEvent));
// router.post("/event", ErrorHandler.handleErrors(eventsController.createEvent));

router.post("/event", FileUploader.uploader("files", "events", 2 * 1024 * 1024), ErrorHandler.handleErrors(eventsController.createEvent));
router.put("/event/:id", ErrorHandler.handleErrors(eventsController.updateEvent));
router.delete("/delete-event/:id", ErrorHandler.handleErrors(eventsController.deleteEvent))
// router.post("/categories", ErrorHandler.handleErrors(EventService.createCategory));
export default router;