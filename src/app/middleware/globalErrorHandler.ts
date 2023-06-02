import { Request, Response, NextFunction } from 'express'
import config from '../../config/index'
import { IGenericeErrorMessage } from '../../interface/error'

const globalErrorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const statusCode = 500
  const message = 'Something went wrong'
  const errorMessages: IGenericeErrorMessage[] = []

  res.status(statusCode).json({
    success: false,
    message,
    errorMessages,
    stack: config.node_env !== 'production' ? err?.stack : undefined,
  })

  next()
}

export default globalErrorHandler
