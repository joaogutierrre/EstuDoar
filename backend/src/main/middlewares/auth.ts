import { makeAuthMiddleware } from '../factories/middlewares/auth-middleware-factory';
import { adaptMiddleware } from './../adapters/express-middleware-adapter';

export const auth = adaptMiddleware(makeAuthMiddleware())

export const adminAuth = adaptMiddleware(makeAuthMiddleware('admin'))

export const donatorAuth = adaptMiddleware(makeAuthMiddleware('donator'))

export const parentAuth = adaptMiddleware(makeAuthMiddleware('parent'))