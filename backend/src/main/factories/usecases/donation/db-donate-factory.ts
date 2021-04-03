import { StudentMongoRepository } from './../../../../infra/db/mongodb/student/student-mongo-repository';
import { DbDonate } from './../../../../data/usecases/donation/db-donate';
import { DonationMongoRepository } from './../../../../infra/db/mongodb/donation/donation-mongo-repository';
import { Donate } from './../../../../domain/usecases/donation/donate';

export const makeDbDonate = (): Donate => {
  const donationMongoRepository = new DonationMongoRepository()
  const studentMongoRepository = new StudentMongoRepository()
  return new DbDonate(studentMongoRepository, studentMongoRepository, donationMongoRepository)
}
