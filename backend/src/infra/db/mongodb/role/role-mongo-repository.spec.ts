import { Collection } from "mongodb";
import { MongoHelper } from "../helpers/mongo-helper";
import { RoleMongoRepository } from "./role-mongo-repository";

let roleCollection: Collection
describe('RoleMongoRepository', () => {
    beforeAll(async () => {
        await MongoHelper.connect(process.env.MONGO_URL)
    })

    afterAll(async () => {
        await MongoHelper.disconnect()
    })

    beforeEach(async () => {
        roleCollection = await MongoHelper.getCollection('roles')
        await roleCollection.deleteMany({})
    })

    type SutTypes = {
        sut: RoleMongoRepository
    }

    const makeSut = (): SutTypes => {
        const sut = new RoleMongoRepository()
        return {
            sut
        }
    }

    describe('loadRole()', () => {
        test('should return a role on loadRole success', async () => {
            await roleCollection.insertMany([{
                code: 'any_code',
                name: 'any_name'
            }, {
                code: 'any_code',
                name: 'any_name'
            }])
            const { sut } = makeSut()
            const role = await sut.loadRole()
            expect(role).toBeTruthy()
            expect(role[0].id).toBeTruthy()
            expect(role[0].code).toBe('any_code')
            expect(role[0].name).toBe('any_name')
        })
    });
}
)