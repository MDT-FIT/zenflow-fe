/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BankConfigDto } from '../../../api/dto/BankConfig'
import type { StatsFilterDto } from '../../../api/dto/StatsFilter'
import type { TransactionFilterDto } from '../../../api/dto/TransactionFilter'
import type { CancelablePromise } from '../../../api/core/CancelablePromise'
import { OpenAPI } from '../../../api/core/OpenAPI'
import { request as __request } from '../../../api/core/request'
export class BankService {
  /**
   * @param userId
   * @returns any OK
   * @throws ApiError
   */
  public static getApiBankBankConfigs(userId: string): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/api/Bank/bank-configs/{userId}',
      path: {
        userId: userId,
      },
    })
  }
  /**
   * @param requestBody
   * @returns any OK
   * @throws ApiError
   */
  public static postApiBankTransactions(
    requestBody?: TransactionFilterDto
  ): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/api/Bank/transactions',
      body: requestBody,
      mediaType: 'application/json',
    })
  }
  /**
   * @param requestBody
   * @returns any OK
   * @throws ApiError
   */
  public static postApiBankStatsExpenses(requestBody?: StatsFilterDto): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/api/Bank/stats/expenses',
      body: requestBody,
      mediaType: 'application/json',
    })
  }
  /**
   * @param requestBody
   * @returns any OK
   * @throws ApiError
   */
  public static postApiBankStatsIncome(requestBody?: StatsFilterDto): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/api/Bank/stats/income',
      body: requestBody,
      mediaType: 'application/json',
    })
  }
  /**
   * @param requestBody
   * @returns any OK
   * @throws ApiError
   */
  public static postApiBankStatsTopCard(requestBody?: StatsFilterDto): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/api/Bank/stats/top-card',
      body: requestBody,
      mediaType: 'application/json',
    })
  }
  /**
   * @param accountIds
   * @param userId
   * @returns any OK
   * @throws ApiError
   */
  public static getApiBankBalances(
    accountIds?: Array<string>,
    userId?: string
  ): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/api/Bank/balances',
      query: {
        accountIds: accountIds,
        userId: userId,
      },
    })
  }
  /**
   * @param code
   * @param userId
   * @returns any OK
   * @throws ApiError
   */
  public static postApiBankConnectOtherBank(code: string, userId?: string): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/api/Bank/connect/other-bank/{code}',
      path: {
        code: code,
      },
      query: {
        userId: userId,
      },
    })
  }
  /**
   * @returns BankConfig OK
   * @throws ApiError
   */
  public static getApiBank(): CancelablePromise<Array<BankConfigDto>> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/api/Bank',
    })
  }
  /**
   * @param requestBody
   * @returns BankConfig OK
   * @throws ApiError
   */
  public static postApiBank(requestBody?: BankConfigDto): CancelablePromise<BankConfigDto> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/api/Bank',
      body: requestBody,
      mediaType: 'application/json',
    })
  }
  /**
   * @param id
   * @returns BankConfig OK
   * @throws ApiError
   */
  public static getApiBank1(id: string): CancelablePromise<BankConfigDto> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/api/Bank/{id}',
      path: {
        id: id,
      },
    })
  }
  /**
   * @param id
   * @param requestBody
   * @returns any OK
   * @throws ApiError
   */
  public static putApiBank(id: string, requestBody?: BankConfigDto): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'PUT',
      url: '/api/Bank/{id}',
      path: {
        id: id,
      },
      body: requestBody,
      mediaType: 'application/json',
    })
  }
  /**
   * @param id
   * @returns any OK
   * @throws ApiError
   */
  public static deleteApiBank(id: string): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'DELETE',
      url: '/api/Bank/{id}',
      path: {
        id: id,
      },
    })
  }
}
