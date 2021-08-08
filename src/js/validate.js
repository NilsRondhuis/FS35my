export default function validatePass (pass) {
    return passSchema.validate(pass);
};

import Joi from 'joi'; // импорт библиотеки

const passSchema = Joi.string().min(3).max(10);
