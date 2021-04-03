import { Donate } from './../../../domain/usecases/donation/donate';
import { HttpRequest, HttpResponse } from './../../protocols/http';
import { Controller } from './../../protocols/controller';

export class DonationController implements Controller {
  constructor (
    private readonly donate: Donate
  ) {}

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    const { accountId } = httpRequest
    const { type, studentId, items } = httpRequest.body
    await this.donate.donate({
      accountId,
      type,
      studentId,
      items
    })
    return null
  }
}