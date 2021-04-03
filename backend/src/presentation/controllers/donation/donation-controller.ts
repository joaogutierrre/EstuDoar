import { InvalidParamError } from './../../errors/invalid-param-error';
import { serverError, forbidden, ok } from './../../helpers/http/http-helper';
import { Donate } from './../../../domain/usecases/donation/donate';
import { HttpRequest, HttpResponse } from './../../protocols/http';
import { Controller } from './../../protocols/controller';

export class DonationController implements Controller {
  constructor (
    private readonly donate: Donate
  ) {}

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const { accountId } = httpRequest
      const { type, studentId, items } = httpRequest.body
      const donation = await this.donate.donate({
        accountId,
        type,
        studentId,
        items
      })
      if (!donation) {
        return forbidden(new InvalidParamError('donated'))
      }
      return ok(donation)
    } catch (error) {
      return serverError(error)
    }
  }
}