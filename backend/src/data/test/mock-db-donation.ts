import { mockDonationModel } from './../../domain/test/mock-donation';
import { DonationModel } from './../../domain/model/donation';
import { DonateParams } from './../../domain/usecases/donation/donate';
import { DonateRepository } from './../protocols/db/donation/donate-repository';

export class DonateRepositorySpy implements DonateRepository {
  data: object
  async donate (data: DonateParams): Promise<DonationModel> {
    this.data = data
    return mockDonationModel()
  }
}