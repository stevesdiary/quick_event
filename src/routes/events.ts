import express from "express";
import { EventsController } from "../controllers/EventsController";

const eventsController = new EventsController()
const router = express.Router();

router.get("/", eventsController.getEvents);

export default router;