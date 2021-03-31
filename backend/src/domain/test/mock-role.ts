import { RolesModel } from "../model/role";

export const mockRoleModel = (): RolesModel => ({
    roles: [{
        id: 'any_id',
        code: 'any_code',
        name: 'any_name'
    }, {
        id: 'other_id',
        code: 'other_code',
        name: 'other_name'
    }]
})