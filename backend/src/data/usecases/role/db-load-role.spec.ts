import { LoadRoleRepositorySpy } from "../../test/mock-load-role";
import { DbLoadRole } from "./db-load-role";

type SutTypes = {
    sut: DbLoadRole
    loadRoleRepositorySpy: LoadRoleRepositorySpy
}

const makeSut = (): SutTypes => {
    const loadRoleRepositorySpy = new LoadRoleRepositorySpy()
    const sut = new DbLoadRole(loadRoleRepositorySpy)
    return {
        sut,
        loadRoleRepositorySpy
    }
}

describe('DbLoadRole', () => {
    test('should call LoadRoleRepository', async () => {
        const { sut, loadRoleRepositorySpy } = makeSut()
        const loadRoleSpy = jest.spyOn(loadRoleRepositorySpy, 'loadRole')
        await sut.load()
        expect(loadRoleSpy).toHaveBeenCalled()
    })
})