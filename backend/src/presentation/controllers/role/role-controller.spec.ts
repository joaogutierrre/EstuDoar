import { ServerError } from "../../errors/server-error";
import { serverError } from "../../helpers/http/http-helper";
import { HttpRequest } from "../../protocols/http";
import { LoadRolesSpy } from "../../test/role/mock-role";
import { RoleController } from "./role-controller";

const mockRequest = (): HttpRequest => ({
    body: {
        code: 'any_code',
        name: 'any_name'
    }
})

type SutTypes = {
    sut: RoleController
    loadRolesSpy: LoadRolesSpy
}

const makeSut = (): SutTypes => {
    const loadRolesSpy = new LoadRolesSpy()
    const sut = new RoleController(loadRolesSpy)
    return {
        sut,
        loadRolesSpy
    }
}

describe('RoleController', () => {
    test('should return 500 if LoadRole throws', async () => {
        const { sut, loadRolesSpy } = makeSut()
        jest.spyOn(loadRolesSpy, 'load').mockImplementationOnce(async () =>{
            return Promise.reject(new Error())
        })
        const httpRequest = mockRequest()
        const httpResponse = await sut.handle(httpRequest)
        expect(httpResponse).toEqual(serverError(new ServerError(null)))
    })
})