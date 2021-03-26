import { serverError } from './../helpers/http/http-helper';
import { ServerError } from './../errors/server-error';
import { HttpRequest, HttpResponse } from './../protocols/http';
import { Controller } from './../protocols/controller';
import { UfsModel } from './../../domain/model/locality';
import { LoadUfs } from './../../domain/usecases/locality/load-ufs';

export class LoadUfsController implements Controller {
  constructor (
    private readonly loadUfs: LoadUfs
  ) {}

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      await this.loadUfs.load()
    } catch (error) {
      return serverError(new ServerError(error))
    }
  }
}