/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { UserDto } from '../../../api/dto/User';
import type { CancelablePromise } from '../../../api/core/CancelablePromise';
import { OpenAPI } from '../../../api/core/OpenAPI';
import { request as __request } from '../../../api/core/request';
export class UserService {
    /**
     * @returns User OK
     * @throws ApiError
     */
    public static getApiUser(): CancelablePromise<Array<UserDto>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/User',
        });
    }
    /**
     * @param requestBody
     * @returns User OK
     * @throws ApiError
     */
    public static postApiUser(
        requestBody?: UserDto,
    ): CancelablePromise<UserDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/User',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param id
     * @returns User OK
     * @throws ApiError
     */
    public static getApiUser1(
        id: string,
    ): CancelablePromise<UserDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/User/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * @param id
     * @param requestBody
     * @returns any OK
     * @throws ApiError
     */
    public static putApiUser(
        id: string,
        requestBody?: UserDto,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/User/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param id
     * @returns any OK
     * @throws ApiError
     */
    public static deleteApiUser(
        id: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/User/{id}',
            path: {
                'id': id,
            },
        });
    }
}
