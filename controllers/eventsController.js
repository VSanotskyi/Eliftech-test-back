import {ctrlWrapper} from "../helpers/ctrlWrapper.js";

import {Event} from "../models/event.js";
import {User} from "../models/user.js";
import {HttpError} from "../helpers/HttpError.js";

const getAllEvents = async (req, res) => {
    const events = await Event.find()

    events.sort((a, b) => {
        const dateA = a.eventDate.split('.').reverse().join('.')
        const dateB = b.eventDate.split('.').reverse().join('.')
        return new Date(dateA) - new Date(dateB)
    })

    res.json(events)
}

const registration = async (req, res) => {
    const dto = req.body;

    const findUser = await User.findOne({owner: dto.owner})

    if (findUser.email === dto.email) {
        throw HttpError(409)
    }

    const user = await User.create(dto)

    res.json(user)
}

const getUsersByEventId = async (req, res) => {
    const {id} = req.params

    const users = await User.find({owner: id})

    res.json(users)
}

export const eventsController = {
    getAllEvents: ctrlWrapper(getAllEvents),
    registration: ctrlWrapper(registration),
    getUsersByEventId: ctrlWrapper(getUsersByEventId),
}