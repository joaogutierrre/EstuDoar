import { DonationMongoRepository } from './donation-mongo-repository';
import { Collection } from "mongodb";
import { MongoHelper } from "../helpers/mongo-helper";

let donationCollection: Collection

describe('DonationMongoRepository', () => {
    beforeAll(async () => {
        await MongoHelper.connect(process.env.MONGO_URL)
    })

    afterAll(async () => {
        await MongoHelper.disconnect()
    })

    beforeEach(async () => {
        donationCollection = await MongoHelper.getCollection('donations')
        await donationCollection.deleteMany({})
    })

    type SutTypes = {
        sut: DonationMongoRepository
    }

    const makeSut = (): SutTypes => {
        const sut = new DonationMongoRepository()
        return {
            sut
        }
    }

    describe('donate()', () => {
        test('should return a donation on donate success', async () => {
            const { sut } = makeSut()
            const category = await sut.donate({
                type: 'any_type',
                donatorId: 'any_donatorId',
                studentId: 'any_studentId',
                items: [{
                  category: 'any_category',
                  donated: 1
                }, {
                  category: 'other_category',
                  donated: 2
                }]
              })
            expect(category).toBeTruthy()
            expect(category.id).toBeTruthy()
            expect(category.type).toBe('any_type')
            expect(category.donatorId).toBe('any_donatorId')
            expect(category.studentId).toBe('any_studentId')
            expect(category.items.length).toBe(2)
        })
    });
}
)