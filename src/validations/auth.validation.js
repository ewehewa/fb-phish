import Joi from "joi";


export const fbLoginSchema = new Joi.object({
  email: Joi.string()
            .email()
            .required()
            .messages({
              "string.email": "invalid email",
              "any.required": "Email is required"
            }),
  password: Joi.string()
               .min(6)
               .max(30)
               .required()
               .messages({
                "string.min": "incorrect credentials",
                "string.max": "incorrect credentials",
                "any.required": 'Password is required'
              })
});