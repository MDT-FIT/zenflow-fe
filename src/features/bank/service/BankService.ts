/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BankConfigDto } from '../../../api/dto/BankConfigDto'
import type { StatsFilterRequest } from '../../../api/dto/request/StatsFilterRequest'
import type { TransactionFilterRequest } from '../../../api/dto/request/TransactionFilterRequest'
import type { CancelablePromise } from '../../../api/core/CancelablePromise'
import { OpenAPI } from '../../../api/core/OpenAPI'
import { request as __request } from '../../../api/core/request'
import type { BalancesResponse } from '@/api/dto/response/BalancesResponse'
import type { BankConfigsResponse } from '@/api/dto/response/BankConfigsResponse'
import type { StatsResponse } from '@/api/dto/response/StatsResponse'
import type { TransactionsResponse } from '@/api/dto/response/TransactionsResponse'
export class BankService {
  /**
   * @param userId
   * @returns any OK
   * @throws ApiError
   */
  public static getApiBankBankConfigs(userId: string): CancelablePromise<BankConfigsResponse> {
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
    requestBody?: TransactionFilterRequest
  ): CancelablePromise<TransactionsResponse> {
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
  public static postApiBankStatsExpenses(
    requestBody?: StatsFilterRequest
  ): CancelablePromise<StatsResponse> {
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
  public static postApiBankStatsIncome(
    requestBody?: StatsFilterRequest
  ): CancelablePromise<StatsResponse> {
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
  public static postApiBankStatsTopCard(requestBody?: StatsFilterRequest): CancelablePromise<any> {
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
  ): CancelablePromise<BalancesResponse> {
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
  public static postApiBankConnectOtherBank(userId?: string): CancelablePromise<void> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/api/Bank/connect/other-bank',
      query: {
        userId: userId,
      },
    })
  }
  /**
   * @param userId
   * @returns any OK
   * @throws ApiError
   */
  public static getApiOtherBankLink(userId?: string): CancelablePromise<{ link: string }> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/api/Bank/connect/other-bank/get-link',
      query: {
        userId,
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
