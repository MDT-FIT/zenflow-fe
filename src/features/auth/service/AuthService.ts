/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { LogInRequest } from '../../../api/dto/request/LogInRequest'
import type { SignUpRequest } from '../../../api/dto/request/SignUpRequest'
import type { CancelablePromise } from '../../../api/core/CancelablePromise'
import { OpenAPI } from '../../../api/core/OpenAPI'
import { request as __request } from '../../../api/core/request'
import type { GetUserResponse } from '@/api/dto/response/GetUserResponse'

export class AuthService {
  /**
   * @param requestBody
   * @returns any OK
   * @throws ApiError
   */
  public static getApiZenflowAuthGetUser(): CancelablePromise<GetUserResponse> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/api/zenflow/Auth/get-user',
      mediaType: 'application/json',
    })
  }
  /**
   * @param requestBody
   * @returns any OK
   * @throws ApiError
   */
  public static postApiZenflowAuthSignUp(requestBody?: SignUpRequest): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/api/zenflow/Auth/sign-up',
      body: requestBody,
      mediaType: 'application/json',
    })
  }
  /**
   * @param requestBody
   * @returns any OK
   * @throws ApiError
   */
  public static postApiZenflowAuthLogIn(requestBody?: LogInRequest): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/api/zenflow/Auth/log-in',
      body: requestBody,
      mediaType: 'application/json',
    })
  }
  /**
   * @param requestBody
   * @returns any OK
   * @throws ApiError
   */
  public static postApiZenflowAuthRefresh(): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/api/zenflow/Auth/refresh',
      mediaType: 'application/json',
    })
  }
  /**
   * @param requestBody
   * @returns any OK
   * @throws ApiError
   */
  public static postApiZenflowAuthLogOut(requestBody?: string): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/api/zenflow/Auth/log-out',
      body: requestBody,
      mediaType: 'application/json',
    })
  }
}
