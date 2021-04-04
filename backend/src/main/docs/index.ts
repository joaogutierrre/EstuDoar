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
    loginParams: loginParamsSchema
  }
}