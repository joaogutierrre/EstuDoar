import { SubdistrictsModel } from "../model/subdistrict";

export const mockRoleModel = (): SubdistrictsModel => ({
    subdistricts: [{
        id: 'any_id',
        code: 'any_code',
        name: 'any_name'
    }, {
        id: 'other_id',
        code: 'other_code',
        name: 'other_name'
    }]
})