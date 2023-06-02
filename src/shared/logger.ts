import { createLogger, format, transports } from 'winston'
const { combine, timestamp, label, printf, prettyPrint } = format

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
    new transports.File({
      filename: path.join(process.cwd(), 'logger', 'winstone', 'success.log'),
      level: 'info',
    }),
  ],
})

const errorLogger = createLogger({
  level: 'error',
  format: combine(label({ label: 'right meow!' }), timestamp(), myFormat),
  defaultMeta: { service: 'user-service' },
  transports: [
    new transports.Console(),
    new transports.File({
      filename: path.join(process.cwd(), 'logger', 'winstone', 'error.log'),
      level: 'error',
    }),
  ],
})

export { logger, errorLogger }
