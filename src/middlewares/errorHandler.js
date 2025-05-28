import ErrorTypes from "../constants/errorTypes.js";

const errorHandler = (err, req, res, next)=>{
  let statusCode = err.statusCode || 500;
  let message = err.message || "Something went wrong";
  let errorType = err.errorType || ErrorTypes.SERVER_ERROR;

  return res.status(statusCode).json({
    success: false,
    error:{
      message,
      errorType
    }
  });
}

export default errorHandler;