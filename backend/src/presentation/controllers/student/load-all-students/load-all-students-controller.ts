import { serverError, ok, noContent } from './../../../helpers/http/http-helper';
import { LoadAllStudents } from './../../../../domain/usecases/student/load-all-students';
import { HttpRequest, HttpResponse } from './../../../protocols/http';
import { Controller } from './../../../protocols/controller';

export class LoadAllStudentsController implements Controller {
  constructor (
    private readonly loadAllStudents: LoadAllStudents
  ) {}

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const students = await this.loadAllStudents.load(httpRequest.params)
      return students.length ? ok(students) : noContent()
    } catch (error) {
      return serverError(error)
    }
  }
}