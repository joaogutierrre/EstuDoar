import { AccountModel } from './../../model/account';

export interface LoadAccountByToken {
  loadByToken: (accessToken: string, role?: string) => Promise<AccountModel>
}