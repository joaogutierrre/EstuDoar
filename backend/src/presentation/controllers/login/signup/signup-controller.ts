<<<<<<< HEAD:backend/src/presentation/controllers/login/signup/signup-controller.ts
import { Validation } from '../../../protocols/validation';
import { Authentication } from '../../../../domain/usecases/account/authentication';
import { EmailInUseError } from '../../../errors/email-in-use-error';
import { serverError, forbidden, ok, badRequest } from '../../../helpers/http/http-helper';
import { AddAccount } from '../../../../domain/usecases/account/add-account';
import { HttpRequest, HttpResponse } from '../../../protocols/http';
import { Controller } from '../../../protocols/controller';
=======
import { Validation } from '../../protocols/validation';
import { Authentication } from '../../../domain/usecases/account/authentication';
import { EmailInUseError } from '../../errors/email-in-use-error';
import { serverError, forbidden, ok, badRequest } from '../../helpers/http/http-helper';
import { AddAccount } from '../../../domain/usecases/account/add-account';
import { HttpRequest, HttpResponse } from '../../protocols/http';
import { Controller } from '../../protocols/controller';
>>>>>>> back/feat/loadcategories:backend/src/presentation/controllers/signup/signup-controller.ts

export class SignUpController implements Controller {
  constructor (
    private readonly addAccount: AddAccount,
    private readonly authentication: Authentication,
    private readonly validation: Validation
  ) {}

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const error = this.validation.validate(httpRequest.body)
      if (error) {
        return badRequest(error)
      }
      const { name, email, cpf, role, password } = httpRequest.body
      const account = await this.addAccount.add({
        name,
        email,
        cpf,
        role,
        password
      })
      if (!account) {
        return forbidden(new EmailInUseError())
      }
      const accessToken = await this.authentication.auth({
        email,
        password
      })
      return ok({ accessToken })
    } catch (error) {
      return serverError(error)
    }
  }
}