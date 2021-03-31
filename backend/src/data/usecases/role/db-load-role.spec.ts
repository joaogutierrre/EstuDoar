import { throwError } from "../../../domain/test/test-helper";
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
    });

    test('should throw if LoadRoleRepository throws', async () => {
        const { sut, loadRoleRepositorySpy } = makeSut()
        jest.spyOn(loadRoleRepositorySpy, 'loadRole').mockImplementation(throwError)
        const promise = sut.load()
        await expect(promise).rejects.toThrow()
    });

    test('should return null if LoadRolesRepository returns null', async () => {
        const { sut, loadRoleRepositorySpy } = makeSut()
        jest.spyOn(loadRoleRepositorySpy, 'loadRole').mockReturnValueOnce(null)
        const promise = await sut.load()
        await expect(promise).toBeNull()
    });
    
})