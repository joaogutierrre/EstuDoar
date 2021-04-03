import { MongoHelper } from './../helpers/mongo-helper';
import { DonateParams } from './../../../../domain/usecases/donation/donate';
import { DonationModel } from './../../../../domain/model/donation';
import { DonateRepository } from './../../../../data/protocols/db/donation/donate-repository';

export class DonationMongoRepository implements DonateRepository {
  async donate (data: DonateParams): Promise<DonationModel> {
    const donationCollection = await MongoHelper.getCollection('donations')
    const result = await donationCollection.insertOne(data)
    const donation = result.ops[0]
    return MongoHelper.map(donation)
  }
}