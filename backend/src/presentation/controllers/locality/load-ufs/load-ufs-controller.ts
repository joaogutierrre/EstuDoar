import { ServerError } from './../../../errors/server-error';
import { ok, serverError } from './../../../helpers/http/http-helper';
import { Controller } from './../../../protocols/controller';
import { LoadUfs } from './../../../../domain/usecases/locality/load-ufs';
import { HttpRequest, HttpResponse } from './../../../protocols/http';


export class LoadUfsController implements Controller {
  constructor (
    private readonly loadUfs: LoadUfs
  ) {}

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const ufs = await this.loadUfs.load()
      return ok(ufs)
    } catch (error) {
      return serverError(new ServerError(error))
    }
  }
}