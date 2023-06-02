import mongoose from 'mongoose'
import app from './app'
import config from './config/index'
import logger from './shared/logger'

async function bootstrap() {
  try {
    await mongoose.connect(config.database_url as string)
    logger.info('😍 Database connected successfully ')
    app.listen(config.port, () => {
      logger.info(`University app listening on port ${config.port}`)
    })
  } catch (err) {
    logger.error('😥 Database connection failed ', err)
  }
}

bootstrap()
