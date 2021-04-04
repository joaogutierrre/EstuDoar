import { signUpParamsSchema } from './schemas/signup-params-schema';
import { signUpPath } from './paths/signup-path';
import { apiKeyAuthSchema } from './schemas/api-key-auth-schema';
import { noContent } from './components/no-content';
import { studentsSchema } from './schemas/students-schema';
import { forbidden } from './components/forbidden';
import { studentItemSchema } from './schemas/student-item-schema';
import { studentSchema } from './schemas/student-schema';
import { notFound } from './components/not-found';
import { unauthorized } from './components/unauthorized';
import { serverError } from './components/server-error';
import { badRequest } from './components/bad-request';
import { errorSchema } from './schemas/error-schema';
import { loginParamsSchema } from './schemas/login-params-schema';
import { accountSchema } from './schemas/account-schema';
import { loginPath } from './paths/login-path'
import { studentPath } from './paths/student-path';

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
  }, {
    name: 'Estudante'
  }],
  paths: {
    '/login': loginPath,
    '/signup': signUpPath,
    '/students': studentPath
  },
  schemas: {
    account: accountSchema,
    loginParams: loginParamsSchema,
    signUpParams: signUpParamsSchema,
    error: errorSchema,
    student: studentSchema,
    students: studentsSchema,
    studentItem: studentItemSchema
  },
  components: {
    securitySchemes: {
      apiKeyAuth: apiKeyAuthSchema
    },
    badRequest,
    serverError,
    unauthorized,
    notFound,
    forbidden,
    noContent
  }
}