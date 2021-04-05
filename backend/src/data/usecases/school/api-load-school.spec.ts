import { mockSchoolsModel } from "../../../domain/test/mock-school";
import { throwError } from "../../../domain/test/test-helper";
import { LoadMapRepositorySpy } from "../../test/mock-load-map";
import { LoadSchoolServiceSpy} from "../../test/mock-load-school"
import { ApiLoadSchool } from "./api-load-school";

type SutTypes = {
    sut: ApiLoadSchool
    loadMapRepositorySpy: LoadMapRepositorySpy
    loadSchoolServiceSpy: LoadSchoolServiceSpy
}

const makeSut = (): SutTypes => {
    const loadMapRepositorySpy = new LoadMapRepositorySpy()
    const loadSchoolServiceSpy = new LoadSchoolServiceSpy()
    const sut = new ApiLoadSchool(loadMapRepositorySpy, loadSchoolServiceSpy)
    return {
        sut,
        loadMapRepositorySpy,
        loadSchoolServiceSpy
    }
}

describe('ApiLoadSchool', () => {
    test('should call LoadMapRepository', async () => {
        const { sut, loadMapRepositorySpy } = makeSut()
        await sut.load('city')
        expect(loadMapRepositorySpy.wasCalled).toBe(true)
    });

    test('should throw if LoadMapRepository throws', async () => {
        const { sut, loadMapRepositorySpy } = makeSut()
        jest.spyOn(loadMapRepositorySpy, 'loadMap').mockImplementation(throwError)
        const promise = sut.load('city')
        await expect(promise).rejects.toThrow()
    });

    test('should return null if LoadMapRepository returns null', async () => {
        const { sut, loadMapRepositorySpy } = makeSut()
        jest.spyOn(loadMapRepositorySpy, 'loadMap').mockReturnValueOnce(null)
        const promise = await sut.load('city')
        await expect(promise).toBeNull()
    });
})