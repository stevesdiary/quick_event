import express from "express";
import { ErrorHandler } from "../../utils/ErrorHandler";
import { EventsController } from "../controllers/EventsController";

const eventsController = new EventsController()
const router = express.Router();

router.get("/", ErrorHandler.handleErrors(eventsController.getEvents));

router.get("/:id", ErrorHandler.handleErrors(eventsController.getEvent));

export default router;