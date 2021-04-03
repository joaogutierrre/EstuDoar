import { ServerError } from "../../../errors/server-error"
import { ServiceUnavaibleError } from "../../../errors/service-unavaible-error"
import { serverError, serviceUnavaible } from "../../../helpers/http/http-helper"
import { HttpRequest } from "../../../protocols/http"
import { LoadSubdistrictsSpy } from "../../../test/mock-locality"
import { LoadSubdistrictsController } from "./load-subdistricts-controller"

const mockRequest = (): HttpRequest => ({
    params: {
        city: 'any_city'
    }
})

type SutTypes = {
    sut: LoadSubdistrictsController
    loadSubdistrictsSpy: LoadSubdistrictsSpy
}

const makeSut = (): SutTypes => {
    const loadSubdistrictsSpy = new LoadSubdistrictsSpy()
    const sut = new LoadSubdistrictsController(loadSubdistrictsSpy)
    return {
        sut,
        loadSubdistrictsSpy
    }
}

describe('LoadSubdistricts Controller', () => {
    test('should return 500 if LoadSubdistricts throws', async () => {
        const { sut, loadSubdistrictsSpy } = makeSut()
        jest.spyOn(loadSubdistrictsSpy, 'load').mockImplementationOnce(() => {
            return Promise.reject(new Error())
        })
        const httpResponse = await sut.handle(mockRequest())
        expect(httpResponse).toEqual(serverError(new ServerError(null)))
    });

    test('should call LoadSubdistricts with correct value', async () => {
        const { sut, loadSubdistrictsSpy } = makeSut()
        await sut.handle(mockRequest())
        expect(loadSubdistrictsSpy.data).toBe('any_city')
    });

    test('should return 503 if LoadSubdistricts returns null', async () => {
        const { sut, loadSubdistrictsSpy } = makeSut()
        jest.spyOn(loadSubdistrictsSpy, 'load').mockReturnValueOnce(null)
        const httpResponse = await sut.handle(mockRequest())
        expect(httpResponse).toEqual(serviceUnavaible(new ServiceUnavaibleError()))
    });


})