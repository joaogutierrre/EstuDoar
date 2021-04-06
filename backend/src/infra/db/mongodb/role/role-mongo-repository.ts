import { LoadRoleRepository } from "../../../../data/protocols/db/role/load-role-repository"
import { RoleModel } from "../../../../domain/model/role"
import { MongoHelper } from "../helpers/mongo-helper"

export class RoleMongoRepository implements LoadRoleRepository {
    async loadRole (): Promise<RoleModel[]> {
        const roleCollection = await MongoHelper.getCollection('roles')
        const roles = await roleCollection.find().toArray()
        return MongoHelper.mapCollection(roles)
    }
}