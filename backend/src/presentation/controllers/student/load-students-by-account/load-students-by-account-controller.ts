import { serverError } from './../../../helpers/http/http-helper';
import { LoadStudentsByAccount } from './../../../../domain/usecases/student/load-students-by-account';
import { HttpRequest, HttpResponse } from './../../../protocols/http';
import { Controller } from './../../../protocols/controller';

export class LoadStudentsByAccountController implements Controller {
  constructor (
    private readonly loadStudentsByAccount: LoadStudentsByAccount
  ) {}

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const { accountId } = httpRequest.body
      await this.loadStudentsByAccount.load(accountId)
      return null
    } catch (error) {
      return serverError(error)
    } 
  }
}