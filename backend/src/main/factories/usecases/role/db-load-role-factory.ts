import { DbLoadRole } from "../../../../data/usecases/role/db-load-role";
import { LoadRoles } from "../../../../domain/usecases/role/load-role";
import { RoleMongoRepository } from "../../../../infra/db/mongodb/role/role-mongo-repository";

export const makeDbLoadRole = (): LoadRoles => {
    const roleMongoRepository = new RoleMongoRepository()
    return new DbLoadRole(roleMongoRepository)
}