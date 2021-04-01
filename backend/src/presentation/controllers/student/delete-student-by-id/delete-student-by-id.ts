import { serverError } from './../../../helpers/http/http-helper';
import { DeleteStudentById } from './../../../../domain/usecases/student/delete-student-by-id';
import { HttpRequest, HttpResponse } from './../../../protocols/http';
import { Controller } from './../../../protocols/controller';

export class DeleteStudentByIdController implements Controller {
  constructor (
    private readonly deleteStudentById: DeleteStudentById
  ) {}

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const { accountId } = httpRequest
      const { id } = httpRequest.body
      await this.deleteStudentById.delete(accountId, id)
      return null
    } catch (error) {
      return serverError(error)
    }
  }
}