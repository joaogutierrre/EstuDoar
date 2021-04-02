import { DonationModel } from './../../model/donation';

export type DonateParams = Omit<DonationModel, 'id'>

export interface Donate {
  donate: (data: DonateParams) => Promise<DonationModel>
}