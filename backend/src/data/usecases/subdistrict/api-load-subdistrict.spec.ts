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
})