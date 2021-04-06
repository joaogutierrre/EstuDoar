import { serve, setup } from 'swagger-ui-express'
import { noCache } from '../../main/middlewares/no-cache'
import swaggerConfig from './../docs/index'
import { Express } from 'express'

export default (app: Express): void => {
  app.use('/api-docs', noCache, serve, setup(swaggerConfig))
}