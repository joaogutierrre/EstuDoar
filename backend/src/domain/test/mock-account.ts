import { AuthenticationParams } from './../usecases/account/authentication';
import { AccountModel } from './../model/account';
import { AddAccountParams } from './../usecases/account/add-account';

export const mockAddAccountParams = (): AddAccountParams => ({
  name: 'any_name',
  email: 'any_email@email.com',
  cpf: 'any_cpf',
  password: 'any_password'
})

export const mockAccountModel = (): AccountModel => ({
  id: 'any_id',
  name: 'any_name',
  email: 'any_email@email.com',
  cpf: 'any_cpf',
  password: 'hashed_password'
})

export const mockAuthenticationParams = (): AuthenticationParams => ({
  email: 'any_email@email.com',
  password: 'any_paswword'
})