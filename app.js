const Joi = require('joi');
const Shortid = require('shortid');

const passwordSchema = Joi.string().min(3).max(10).alphanum();

console.log(passwordSchema.validate(Shortid.generate()));