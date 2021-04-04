import { ufsSchema } from './schemas/ufs-schema';
import { ufSchema } from './schemas/uf-schema';
import { ufPath } from './paths/uf-path';
import { donateParamsSchema } from './schemas/donate-params-schema';
import { donationSchema } from './schemas/donation-schema';
import { donationItemSchema } from './schemas/donation-item-schema';
import { donationPath } from './paths/donation-path';
import { rolesSchema } from './schemas/roles-schema';
import { roleSchema } from './schemas/role-schema';
import { rolePath } from './paths/role-path';
import { updateStudentParamsSchema } from './schemas/update-student-params-schema';
import { feedStudentPath } from './paths/feed-student-path';
import { addStudentParamsSchema } from './schemas/add-student-params-schema';
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
import { deleteStudentParamsSchema } from './schemas/delete-student-params-schema';

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
  }, {
    name: 'Doação'
  }, {
    name: 'Localidade'
  }, {
    name: 'Função'
  }],
  paths: {
    '/login': loginPath,
    '/signup': signUpPath,
    '/students': studentPath,
    '/feed/students/': feedStudentPath,
    '/feed/students/{uf}': feedStudentPath,
    '/feed/students/{uf}/{city}': feedStudentPath,
    '/feed/students/{uf}/{city}/{school}': feedStudentPath,
    '/role': rolePath,
    '/donate': donationPath,
    '/ufs': ufPath
  },
  schemas: {
    account: accountSchema,
    loginParams: loginParamsSchema,
    signUpParams: signUpParamsSchema,
    error: errorSchema,
    student: studentSchema,
    students: studentsSchema,
    studentItem: studentItemSchema,
    addStudentParams: addStudentParamsSchema,
    updateStudentParams: updateStudentParamsSchema,
    deleteStudentParams: deleteStudentParamsSchema,
    role: roleSchema,
    roles: rolesSchema,
    donation: donationSchema,
    donationItem: donationItemSchema,
    donateParams: donateParamsSchema,
    uf: ufSchema,
    ufs: ufsSchema
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