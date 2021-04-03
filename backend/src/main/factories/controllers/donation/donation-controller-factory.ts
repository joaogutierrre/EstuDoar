import { makeDonationValidation } from './donation-validation-factory';
import { makeDbDonate } from './../../usecases/donation/db-donate-factory';
import { DonationController } from './../../../../presentation/controllers/donation/donation-controller';

export const makeDonationController = (): DonationController => {
  const donationController = new DonationController(makeDbDonate(), makeDonationValidation())
  return donationController
}