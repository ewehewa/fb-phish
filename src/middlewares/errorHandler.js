import ErrorTypes from "../constants/errorTypes.js";
import logger from "../util/logger.js";

const errorHandler = (err, req, res, next)=>{
  let statusCode = err.statusCode || 500;
  let message = err.message || "Something went wrong";
  let errorType = err.errorType || ErrorTypes.SERVER_ERROR;

  logger.error(`${req.method} ${req.originalUrl} - ${err.message} ${err.stack}`);

  return res.status(statusCode).json({
    success: false,
    error:{
      message,
      errorType
    }
  });
}

export default errorHandler;