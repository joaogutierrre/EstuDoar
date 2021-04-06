import { RolesModel } from "../../../domain/model/role";
import { LoadRoles } from "../../../domain/usecases/role/load-role";
import { LoadRoleRepository } from "../../protocols/db/role/load-role-repository";

export class DbLoadRole implements LoadRoles {
    
    constructor(
        private readonly loadRoleRepository: LoadRoleRepository
    ) { }

    async load(): Promise<RolesModel> {
        const roles = await this.loadRoleRepository.loadRole()
        if (roles) {
            return { roles }
        }
        return null
    }
}