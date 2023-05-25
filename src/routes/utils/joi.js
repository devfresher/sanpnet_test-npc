import joi from "joi"
import joiObjectid from "joi-objectid"

joi.objectId = joiObjectid(joi)
export const Joi = joi
