import express from "express";
import { ErrorHandler } from "../../utils/ErrorHandler";
// import { EventsController } from "../controllers/EventsController";
import { FileUploader } from "../middlewares/FileUploader";
import { EventService } from "../services/EventService";
const router = express.Router();
import { EntityManager } from 'typeorm';
import { EventsController } from '../controllers/EventsController';

const entityManager = getManager();
const ventsController = new EventsController();

router.get("/", ErrorHandler.handleErrors(EventsController.getEvents));

router.get("/:id", ErrorHandler.handleErrors(EventsController.getEvent));
// router.post("/event", ErrorHandler.handleErrors(eventsController.createEvent));

router.post("/event", FileUploader.uploader("files", "events", 2 * 1024 * 1024), ErrorHandler.handleErrors(EventsController.createEvent));
router.put("/event/:id", ErrorHandler.handleErrors(EventsController.updateEvent));
router.delete("/delete-event/:id", ErrorHandler.handleErrors(EventsController.deleteEvent));
export default router;

function getManager() {
   throw new Error("Function not implemented.");
}
