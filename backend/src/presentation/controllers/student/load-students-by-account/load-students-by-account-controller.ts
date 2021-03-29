import { InvalidParamError } from './../../../errors/invalid-param-error';
import { serverError, forbidden, ok, noContent } from './../../../helpers/http/http-helper';
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
      const students = await this.loadStudentsByAccount.load(accountId)
      if (!students) {
        return forbidden(new InvalidParamError('accountId'))
      }
      return students.length ? ok(students) : noContent()
    } catch (error) {
      return serverError(error)
    } 
  }
}