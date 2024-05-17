import mongoose, {Schema} from "mongoose";
import Joi from "joi";

const eventsSchema = new Schema({
    title: {type: String, required: true},
    description: {type: String, required: true},
    eventDate: {type: String, required: true},
    organizer: {type: String, required: true},
    owner: {
        type: Schema.Types.ObjectId,
        ref: 'user'
    }
})

const createEventsSchema = Joi.object({
    title: Joi.string().required(),
    description: Joi.string().required(),
    eventDate: Joi.string().required(),
    organizer: Joi.string().required(),
})

const Event = mongoose.model('Event', eventsSchema)

export {
    createEventsSchema,
    Event,
}

