import { RolesModel } from "../../../domain/model/role";
import { mockRoleModel } from "../../../domain/test/mock-role";
import { Authentication, AuthenticationParams } from "../../../domain/usecases/account/authentication";
import { LoadRoles } from "../../../domain/usecases/role/load-role";

export class LoadRolesSpy implements LoadRoles{
    data: object
    result: object
    wasCalled: boolean
    async load(): Promise<RolesModel> {
        this.wasCalled = true
        const role = mockRoleModel()
        this.result = role
        return role
    }
}

export class AuthenticationSpy implements Authentication {
    data: object
    result: string
    async auth(data: AuthenticationParams): Promise<string> {
        this.data = data
        const accessToken = 'any_token'
        this.result = accessToken
        return accessToken
    }
}