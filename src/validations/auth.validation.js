import Joi from "joi";


export const fbLoginSchema = new Joi.object({
  emailOrPhone: Joi.alternatives().try(
    Joi.string().email().messages({
      'string.email': 'Please enter a valid email address'
    }),
    Joi.string().pattern(/^\d{6,15}$/).messages({
      'string.pattern.base': 'Please enter a valid phone number'
    })
  ).required().messages({
    'alternatives.match': 'Must be a valid email or phone number',
    'any.required': 'email or phone field is required'
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