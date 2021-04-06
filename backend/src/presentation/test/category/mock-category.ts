import { CategoriesModel } from "../../../domain/model/category"
import { mockCategoryModel } from "../../../domain/test/mock-category"
import { LoadCategories } from "../../../domain/usecases/category/load-category"
import { Authentication, AuthenticationParams } from '../../../domain/usecases/account/authentication';

export class LoadCategoriesSpy implements LoadCategories {
    data: object
    result: object
    wasCalled: boolean
    async load(): Promise<CategoriesModel> {
        this.wasCalled = true
        const category = mockCategoryModel()
        this.result = category
        return category
    }
}

export class AuthenticationSpy implements Authentication {
    data: object
    result: string
    async auth(data: AuthenticationParams): Promise<string> {
        this.data = data
        const accessToken = 'any_token'
        this.result = accessToken
        return accessToken
    }
}