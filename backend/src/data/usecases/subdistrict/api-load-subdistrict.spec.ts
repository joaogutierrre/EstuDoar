import { throwError } from "../../../domain/test/test-helper";
import { LoadSubdistrictRepositorySpy } from "../../test/mock-load-subdistrict";
import { ApiLoadSubdistrict } from "./api-load-subdistrict";

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
        await sut.load()
        expect(loadSubdistrictSpy).toHaveBeenCalled()
    })

    test('should throw if LoadSubdistrictRepository throws', async () => {
        const { sut, loadSubdistrictRepositorySpy } = makeSut()
        jest.spyOn(loadSubdistrictRepositorySpy, 'loadSubdistrict').mockImplementation(throwError)
        const promise = sut.load()
        await expect(promise).rejects.toThrow()
    });
})