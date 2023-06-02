import { createLogger, format, transports } from 'winston'
const { combine, timestamp, label, printf, prettyPrint } = format
import DailyRotateFile from 'winston-daily-rotate-file' //library for manage log

import path from 'path'

const myFormat = printf(({ level, message, label }) => {
  const date = new Date()
  const hours = date.getHours()
  const minute = date.getMinutes()
  const seconds = date.getSeconds()

  return `${hours}:${minute}:${seconds} [${label}] ${level}: ${message}`
})

const logger = createLogger({
  level: 'info',
  format: combine(
    label({ label: 'right meow!' }),
    timestamp(),
    myFormat,
    prettyPrint()
  ),
  defaultMeta: { service: 'user-service' },

  transports: [
    new transports.Console(),
    //custom management of log
    new DailyRotateFile({
      filename: path.join(
        process.cwd(),
        'logger',
        'winstone',
        'success',
        'um-%DATE%-success.log'
      ),
      datePattern: 'MM-DD-HH-YYYY',
      zippedArchive: true,
      maxSize: '20m',
      maxFiles: '14d',
    }),
  ],
})

const errorLogger = createLogger({
  level: 'error',
  format: combine(label({ label: 'right meow!' }), timestamp(), myFormat),
  defaultMeta: { service: 'user-service' },

  transports: [
    new transports.Console(),

    new DailyRotateFile({
      filename: path.join(
        process.cwd(),
        'logger',
        'winstone',
        'errors',
        'um-%DATE%-error.log'
      ),
      datePattern: 'MM-DD-HH-YYYY',
      zippedArchive: true,
      maxSize: '20m',
      maxFiles: '14d',
    }),
  ],
})

export { logger, errorLogger }
