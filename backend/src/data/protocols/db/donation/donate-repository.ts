import { DonationModel } from './../../../../domain/model/donation';
import { DonateParams } from './../../../../domain/usecases/donation/donate';

export interface DonateRepository {
  donate: (data: DonateParams) => Promise<DonationModel>
}