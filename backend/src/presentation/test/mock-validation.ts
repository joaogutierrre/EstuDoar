import { Validation } from './../protocols/validation';
import { Authentication } from './../../domain/usecases/account/authentication';

export class ValidationSpy implements Validation {
  data: any
  result: any = null
  validate (data: any): Error {
    this.data = data
    return null
  }
}