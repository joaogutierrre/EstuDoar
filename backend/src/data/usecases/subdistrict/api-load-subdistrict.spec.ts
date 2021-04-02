import { throwError } from "../../../domain/test/test-helper";
import { LoadSubdistrictRepositorySpy } from "../../test/mock-load-subdistrict";
import { ApiLoadSubdistrict } from "./api-load-subdistrict";
import { mockSubdistrictModel } from "../../../domain/test/mock-subdistrict"

type SutTypes = {
    sut: ApiLoadSubdistrict
    loadSubdistrictRepositorySpy: LoadSubdistrictRepositorySpy
}

const makeSut = (): SutTypes => {
    const loadSubdistrictRepositorySpy = new LoadSubdistrictRepositorySpy()
    const sut = new ApiLoadSubdistrict(loadSubdistrictRepositorySpy)
    return {
        sut,
        loadSubdistrictRepositorySpy
    }
}

describe('ApiLoadSubdistrict', () => {
    test('should call LoadSubdistrictRepository', async () => {
        const { sut, loadSubdistrictRepositorySpy } = makeSut()
        const loadSubdistrictSpy = jest.spyOn(loadSubdistrictRepositorySpy, 'loadSubdistrict')
        await sut.load('city')
        expect(loadSubdistrictSpy).toHaveBeenCalled()
    })

    test('should throw if LoadSubdistrictRepository throws', async () => {
        const { sut, loadSubdistrictRepositorySpy } = makeSut()
        jest.spyOn(loadSubdistrictRepositorySpy, 'loadSubdistrict').mockImplementation(throwError)
        const promise = sut.load('city')
        await expect(promise).rejects.toThrow()
    });

    test('should return null if LoadSubdistrictRepository returns null', async () => {
        const { sut, loadSubdistrictRepositorySpy } = makeSut()
        jest.spyOn(loadSubdistrictRepositorySpy, 'loadSubdistrict').mockReturnValueOnce(null)
        const promise = await sut.load('city')
        await expect(promise).toBeNull()
    });

    test('should return a subdistrict on succes', async () => {
        const { sut } = makeSut()
        const promise = await sut.load('city')
        expect(promise).toEqual(mockSubdistrictModel())
    });
})