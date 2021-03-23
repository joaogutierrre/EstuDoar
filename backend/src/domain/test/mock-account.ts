import { AddAccountParams } from './../usecases/account/add-account';

export const mockAddAccountParams = (): AddAccountParams => ({
  name: 'any_name',
  email: 'any_email@email.com',
  cpf: 'any_cpf',
  password: 'any_password'
})