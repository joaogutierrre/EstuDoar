import { Validation } from './../../../protocols/validation';
import { serverError, badRequest, ok } from './../../../helpers/http/http-helper';
import { AddStudent } from './../../../../domain/usecases/student/add-student';
import { HttpRequest, HttpResponse } from './../../../protocols/http';
import { Controller } from './../../../protocols/controller';

export class AddStudentController implements Controller {
  constructor (
    private readonly addStudent: AddStudent,
    private readonly validation: Validation
  ) {}

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const error = this.validation.validate(httpRequest.body)
      if (error) {
        return badRequest(error)
      }
      const { accountId } = httpRequest
      const { name, school, items } = httpRequest.body
      const student = await this.addStudent.add({
        accountId,
        name,
        school,
        items
      })
      return ok(student)
    } catch (error) {
      return serverError(error)
    }
  }
}