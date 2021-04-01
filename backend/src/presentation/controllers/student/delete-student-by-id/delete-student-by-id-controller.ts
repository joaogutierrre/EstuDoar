import { badRequest } from './../../../helpers/http/http-helper';
import { Validation } from '../../../protocols/validation';
import { serverError } from '../../../helpers/http/http-helper';
import { DeleteStudentById } from '../../../../domain/usecases/student/delete-student-by-id';
import { HttpRequest, HttpResponse } from '../../../protocols/http';
import { Controller } from '../../../protocols/controller';

export class DeleteStudentByIdController implements Controller {
  constructor (
    private readonly deleteStudentById: DeleteStudentById,
    private readonly validation: Validation
  ) {}

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const error = await this.validation.validate(httpRequest.body)
      if (error) {
        return badRequest(error)
      }
      const { accountId } = httpRequest
      const { id } = httpRequest.body
      await this.deleteStudentById.delete(accountId, id)
      return null
    } catch (error) {
      return serverError(error)
    }
  }
}