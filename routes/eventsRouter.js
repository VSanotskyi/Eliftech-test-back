import express from "express";
import {eventsController} from "../controllers/eventsController.js";
import {validateBody} from "../helpers/validateBody.js";
import {createUserSchema} from "../models/user.js";

const eventsRouter = express.Router()

eventsRouter.get('/', eventsController.getAllEvents)

eventsRouter.post('/registration',validateBody(createUserSchema), eventsController.registration)

eventsRouter.get('/users/:id', eventsController.getUsersByEventId)

export {eventsRouter}

