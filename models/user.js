import mongoose, {Schema} from "mongoose";
import Joi from "joi";

const usersSchema = new Schema({
    fullName: {type: String, required: true},
    email: {type: String, required: true},
    dateOfBirth: {type: String, required: true},
    whereHear: {type: String, required: true, enum: ['Social media', "Friends", 'Found myself']},
})

const createUserSchema = Joi.object({
    fullName: Joi.string().required(),
    email: Joi.string().required(),
    dateOfBirth: Joi.string().required(),
    whereHear: Joi.string().required(),
})

const User = mongoose.model('Event', usersSchema)

export {
    createUserSchema,
    User,
}