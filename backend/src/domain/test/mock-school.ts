import { SchoolsModel } from "../model/school";

export const mockSchoolsModel = (): SchoolsModel => ({
    schools: [{
        id: 'any_id',
        code: 'any_code',
        name: 'any_name'
    }, {
        id: 'other_id',
        code: 'other_code',
        name: 'other_name'
    }]
})