import { Collection } from "mongodb"
import { MongoHelper } from "../helpers/mongo-helper"
import { MapMongoRepository } from "./map-mongo-repository"

let mapCollection: Collection
describe('MapMongoRepository', () => {
    beforeAll(async () => {
        await MongoHelper.connect(process.env.MONGO_URL)
    })

    afterAll(async () => {
        await MongoHelper.disconnect()
    })

    beforeEach(async () => {
        mapCollection = await MongoHelper.getCollection('maps')
        await mapCollection.deleteMany({})
    })

    type SutTypes = {
        sut: MapMongoRepository
    }

    const makeSut = (): SutTypes => {
        const sut = new MapMongoRepository()
        return {
            sut
        }
    }

    describe('loadMap', () => {
        test('should return a map on loadMap success', async () =>{
            await mapCollection.insertMany([{
                id: 'any_id',
                cityCode: 'any_code',
                externalCityCode: 'any_xternal_code'
            },{
                id: 'other_id',
                cityCode: 'other_code',
                externalCityCode: 'other_xternal_code'
            }])
            const { sut } = makeSut()
            const map = await sut.loadMap()
            expect(map).toBeTruthy()
            expect(map[0].id).toBeTruthy()
            expect(map[0].cityCode).toBe('any_code')
            expect(map[0].externalCityCode).toBe('any_xternal_code')
        })
    })
}
)