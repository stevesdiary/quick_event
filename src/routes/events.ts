import express from "express";
import { EventsController } from "../controllers/EventsController";

const eventsController = new EventsController()
const router = express.Router();

router.get("/", eventsController.getEvents);

router.get("/:id", eventsController.getEvent);

export default router;