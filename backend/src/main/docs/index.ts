import { notFound } from './components/not-found';
import { unauthorized } from './components/unauthorized';
import { serverError } from './components/server-error';
import { badRequest } from './components/bad-request';
import { errorSchema } from './schemas/error-schema';
import { loginParamsSchema } from './schemas/login-params-schema';
import { accountSchema } from './schemas/account-schema';
import { loginPath } from './paths/login-path'

export default {
  openapi: '3.0.0',
  info: {
    title: 'EstuDoar TS API',
    description: 'API da aplicação EstuDoar',
    version: '1.0.0'
  },
  servers: [{
    url: '/api'
  }],
  tags: [{
    name: 'Login'
  }],
  paths: {
    '/login': loginPath
  },
  schemas: {
    account: accountSchema,
    loginParams: loginParamsSchema,
    error: errorSchema
  },
  components: {
    badRequest,
    serverError,
    unauthorized,
    notFound
  }
}