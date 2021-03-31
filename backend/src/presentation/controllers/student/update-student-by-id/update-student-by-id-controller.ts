import { serverError } from './../../../helpers/http/http-helper';
import { UpdateStudentById } from './../../../../domain/usecases/student/update-student-by-id';
import { HttpRequest, HttpResponse } from './../../../protocols/http';
import { Controller } from './../../../protocols/controller';

export class UpdateStudentByIdController implements Controller {
  constructor (
    private readonly updateStudentById: UpdateStudentById
  ) {}

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const { accountId } = httpRequest
      const { id, name, school, about, image, items } = httpRequest.body
      await this.updateStudentById.update({
        accountId,
        id,
        name,
        school,
        about,
        image,
        items
      })
      return null
    } catch (error) {
      return serverError(error)
    }
  }
}