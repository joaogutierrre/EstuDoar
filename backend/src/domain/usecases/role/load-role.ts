import { RolesModel } from './../../model/role';

export interface LoadRoles {
    load: () => Promise<RolesModel>
}