import { Validation } from './../../../protocols/validation';
import { InvalidParamError } from './../../../errors/invalid-param-error';
import { serverError, forbidden, ok, badRequest } from './../../../helpers/http/http-helper';
import { UpdateStudentById } from './../../../../domain/usecases/student/update-student-by-id';
import { HttpRequest, HttpResponse } from './../../../protocols/http';
import { Controller } from './../../../protocols/controller';

export class UpdateStudentByIdController implements Controller {
  constructor (
    private readonly updateStudentById: UpdateStudentById,
    private readonly validation: Validation
  ) {}

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const error = this.validation.validate(httpRequest.body)
      if (error) {
        return badRequest(error)
      }
      const { accountId } = httpRequest
      const { id, name, age, uf, city, school, about, image, items } = httpRequest.body
      const student = await this.updateStudentById.update({
        accountId,
        id,
        name,
        age,
        uf,
        city,
        school,
        about,
        image,
        items
      })
      if (!student) {
        return forbidden(new InvalidParamError('id'))
      }
      return ok(student)
    } catch (error) {
      return serverError(error)
    }
  }
}