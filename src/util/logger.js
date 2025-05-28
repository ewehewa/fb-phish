import { createLogger, format, transports } from "winston";

const logger = createLogger({
  level: "info",
  format: format.combine(
    format.timestamp(),
    format.printf(({ timestamp, level, message }) => {
      return `[${timestamp}] ${level.toUpperCase()}: ${message}`;
    })
  ),
  transports: [
    new transports.File({ filename: "logs/app.log" })
  ]
});

if (process.env.NODE_ENV !== 'production') {
  logger.add(new transports.Console());
}

export default logger;
