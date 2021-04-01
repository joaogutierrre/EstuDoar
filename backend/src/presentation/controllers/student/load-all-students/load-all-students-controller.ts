import { serverError } from './../../../helpers/http/http-helper';
import { LoadAllStudents } from './../../../../domain/usecases/student/load-all-students';
import { HttpRequest, HttpResponse } from './../../../protocols/http';
import { Controller } from './../../../protocols/controller';

export class LoadAllStudentsController implements Controller {
  constructor (
    private readonly loadAllStudents: LoadAllStudents
  ) {}

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      await this.loadAllStudents.load(httpRequest.body)
      return null
    } catch (error) {
      return serverError(error)
    }
  }
}