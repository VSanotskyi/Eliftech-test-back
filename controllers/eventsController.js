import {ctrlWrapper} from "../helpers/ctrlWrapper.js";

import {Event} from "../models/event.js";
import {User} from "../models/user.js";
import {HttpError} from "../helpers/HttpError.js";

const getAll = async (req, res) => {

    const events = await Event.find()

    res.json(events)
}

const registration = async (req, res) => {
    const dto = req.body;

    const findUser = await User.findOne({owner: dto.owner})

    if (findUser) {
        throw HttpError(409)
    }

    const user = await User.create(dto)

    res.json(user)
}

export const eventsController = {
    getAll: ctrlWrapper(getAll),
    registration: ctrlWrapper(registration)
}