import express from "express";
import { ErrorHandler } from "../../utils/ErrorHandler";
import { EventsController } from "../controllers/EventsController";

const eventsController = new EventsController()
const router = express.Router();

router.get("/", ErrorHandler.handleErrors(eventsController.getEvents));

router.get("/:id", ErrorHandler.handleErrors(eventsController.getEvent));
router.post("/event", ErrorHandler.handleErrors(eventsController.createEvent));
router.put("/edit-event", ErrorHandler.handleErrors(eventsController.updateEvent));
router.delete("/delete-event", ErrorHandler.handleErrors(eventsController.deleteEvent))
export default router;