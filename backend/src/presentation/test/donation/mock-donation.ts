import { mockDonationModel } from './../../../domain/test/mock-donation';
import { DonationModel } from './../../../domain/model/donation';
import { Donate, DonateParams } from './../../../domain/usecases/donation/donate';

export class DonateSpy implements Donate {
  data: object
  async donate (data: DonateParams): Promise<DonationModel> {
    this.data = data
    return mockDonationModel()
  }
}