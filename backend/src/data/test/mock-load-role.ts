import { RoleModel } from "../../domain/model/role";
import { LoadRoleRepository } from "../protocols/db/role/load-role-repository";

export class LoadRoleRepositorySpy implements LoadRoleRepository{
    data: string
    result: object
    async loadRole(): Promise<RoleModel[]>{
        const fakeRole = [{
            id: 'any_id',
            code: 'any_code',
            name: 'any_name'
        },{
            id: 'other_id',
            code: 'other_code',
            name: 'other_name'
        }]
        this.result = fakeRole
        return fakeRole
    }
}