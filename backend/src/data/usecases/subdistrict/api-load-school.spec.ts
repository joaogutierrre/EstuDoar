import { mockSchoolsModel } from "../../../domain/test/mock-school";
import { throwError } from "../../../domain/test/test-helper";
import { LoadMapsRepositorySpy } from "../../test/mock-load-map";
import { LoadSchoolServiceSpy} from "../../test/mock-load-school"
import { ApiLoadSchool } from "./api-load-school";

type SutTypes = {
    sut: ApiLoadSchool
    loadMapRepositorySpy: LoadMapsRepositorySpy
    loadSchoolServiceSpy: LoadSchoolServiceSpy
}

const makeSut = (): SutTypes => {
    const loadMapRepositorySpy = new LoadMapsRepositorySpy()
    const loadSchoolServiceSpy = new LoadSchoolServiceSpy()
    const sut = new ApiLoadSchool(loadMapRepositorySpy, loadSchoolServiceSpy)
    return {
        sut,
        loadMapRepositorySpy,
        loadSchoolServiceSpy
    }
}

describe('ApiLoadSchool', () => {
    test('should call LoadSchoolService', async () => {
        const { sut, loadSchoolServiceSpy } = makeSut()
        jest.spyOn(loadSchoolServiceSpy, 'loadSchool')
        await sut.load('city')
        expect(loadSchoolServiceSpy).toHaveBeenCalled()
    });

    test('should throw if LoadSchoolService throws', async () => {
        const { sut, loadSchoolServiceSpy } = makeSut()
        jest.spyOn(loadSchoolServiceSpy, 'loadSchool').mockImplementation(throwError)
        const promise = sut.load('city')
        await expect(promise).rejects.toThrow()
    });

    test('should return null if LoadSchoolService returns null', async () => {
        const { sut, loadSchoolServiceSpy } = makeSut()
        jest.spyOn(loadSchoolServiceSpy, 'loadSchool').mockReturnValueOnce(null)
        const promise = await sut.load('city')
        await expect(promise).toBeNull()
    });

    test('should return a school on succes', async () => {
        const { sut } = makeSut()
        const promise = await sut.load('city')
        expect(promise).toEqual(mockSchoolsModel())
    });
})