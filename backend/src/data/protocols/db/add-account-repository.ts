import { AddAccountParams } from './../../../domain/usecases/account/add-account';
import { AccountModel } from './../../../domain/model/account';

export interface AddAccountRepository {
  add: (data: AddAccountParams) => Promise<AccountModel>
}