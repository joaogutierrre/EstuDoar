import { RoleController } from "../../../../presentation/controllers/role/role-controller"
import { makeDbLoadRole } from "../../usecases/role/db-load-role-factory"

export const makeRoleController = (): RoleController => {
    const roleController = new RoleController(makeDbLoadRole()) 
    return roleController
}