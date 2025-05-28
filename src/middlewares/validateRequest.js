import { fbLoginSchema } from "../validations/auth.validation.js";
import AppError from "../util/appError.js"
import ErrorTypes from "../constants/errorTypes.js";

export const validateFbLoginInput = (req, res, next)=>{
  const loginInput = req.body;
  const { error, value } = fbLoginSchema.validate(loginInput);
  if(error) throw new AppError(error.message, 400, ErrorTypes.VALIDATION_ERROR);
  req.loginData = value;
  next();
};