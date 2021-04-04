import { serve, setup } from 'swagger-ui-express'
import swaggerConfig from './../docs/index'
import { Express } from 'express'

export default (app: Express): void => {
  app.use('/api-docs', serve, setup(swaggerConfig))
}