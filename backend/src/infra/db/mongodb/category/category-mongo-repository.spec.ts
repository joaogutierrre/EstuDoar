import { Collection } from "mongodb";
import { MongoHelper } from "../helpers/mongo-helper";
import { CategoryMongoRepository } from './category-mongo-repository';

let categoryCollection: Collection

describe('CategoryMongoRepository', () => {
    beforeAll(async () => {
        await MongoHelper.connect(process.env.MONGO_URL)
    })

    afterAll(async () => {
        await MongoHelper.disconnect()
    })

    beforeEach(async () => {
        categoryCollection = await MongoHelper.getCollection('categories')
        await categoryCollection.deleteMany({})
    })

    type SutTypes = {
        sut: CategoryMongoRepository
    }

    const makeSut = (): SutTypes => {
        const sut = new CategoryMongoRepository()
        return {
            sut
        }
    }

    describe('loadCategory()', () => {
        test('should return a category on loadCategory success', async () => {
            const { sut } = makeSut()
            
            const category = await sut.loadCategory()
            expect(category).toBeTruthy()
            expect(category[0].id).toBeTruthy()
            expect(category[0].code).toBe('any_code')
            expect(category[0].name).toBe('any_name')
            
        })

    });
}
)