import { cors } from './../middlewares/cors';
import { bodyParser } from './../middlewares/body-parser';
import { Express } from 'express'

export default (app: Express): void => {
  app.use(bodyParser)
  app.use(cors)
}