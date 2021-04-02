import { DonationModel } from './../model/donation';
import { DonateParams } from './../usecases/donation/donate';

export const mockDonationModel = (): DonationModel => ({
  id: 'any_id',
  type: 'any_type',
  donatorId: 'any_donatorId',
  accountId: 'any_accountId',
  studentId: 'any_studentId',
  items: [{
    category: 'any_category',
    donated: 1
  }, {
    category: 'other_category',
    donated: 2
  }]
})

export const mockDonateParams = (): DonateParams => ({
  type: 'any_type',
  donatorId: 'any_donatorId',
  accountId: 'any_accountId',
  studentId: 'any_studentId',
  items: [{
    category: 'any_category',
    donated: 1
  }, {
    category: 'other_category',
    donated: 2
  }]
})