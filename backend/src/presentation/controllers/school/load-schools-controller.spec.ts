import { HttpRequest } from "../../protocols/http"
import { LoadSchoolsController } from "./load-schools-controller"
import { LoadSchools } from "./../../../domain/usecases/school/load-schools"
import { LoadSchoolsSpy } from "../../test/mock-school"
import { rejects } from "node:assert"
import { ok, serverError, serviceUnavaible } from "../../helpers/http/http-helper"
import { ServerError } from "../../errors/server-error"
import { ServiceUnavaibleError } from "../../errors/service-unavaible-error"
import { mockSchoolsModel } from "../../../domain/test/mock-school"

const mockRequest = (): HttpRequest => ({
    params: {
        uf: 'any_city'
    }
})

type SutTypes = {
    sut: LoadSchoolsController
    loadSchoolsSpy: LoadSchools
}

const makeSut = (): SutTypes => {
    const loadSchoolsSpy = new LoadSchoolsSpy()
    const sut = new LoadSchoolsController(loadSchoolsSpy)
    return {
        sut,
        loadSchoolsSpy
    }
}

describe('LoasSchools Controller', () => {
    test('should return 500 if LoadSchools throws', async () => {
        const { sut, loadSchoolsSpy } = makeSut()
        jest.spyOn(loadSchoolsSpy, 'load').mockImplementationOnce(() => {
            return Promise.reject(new Error())
        })
        const httpResponse = await sut.handle(mockRequest())
        expect(httpResponse).toEqual(serverError(new ServerError(null)))
    });

    test('shoould call LoadSchools with correct value', async () => {
        const { sut, loadSchoolsSpy } = makeSut()
        jest.spyOn(loadSchoolsSpy, 'load').mockReturnValueOnce(null)
        const httpResponse = await sut.handle(mockRequest())
        expect(httpResponse).toEqual(serviceUnavaible(new ServiceUnavaibleError()))
    });

    test('should return 503 if LoadSchools returns null', async () => {
        const { sut, loadSchoolsSpy } = makeSut()
        jest.spyOn(loadSchoolsSpy, 'load').mockReturnValueOnce(null)
        const httpResponse = await sut.handle(mockRequest())
        expect(httpResponse).toEqual(serviceUnavaible(new ServiceUnavaibleError()))
    })

    test('should return 200 on success', async () => {
        const { sut } = makeSut()
        const httpResponse = await sut.handle(mockRequest())
        expect(httpResponse).toEqual(ok(mockSchoolsModel()))
    })
})