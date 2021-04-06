import { RoleModel } from "../../../../domain/model/role";

export interface LoadRoleRepository {
    loadRole: () => Promise<RoleModel[]>
}