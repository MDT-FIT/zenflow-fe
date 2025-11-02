/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BankConfigDto } from './BankConfig'
import type { IMapper } from './IMapper'
import type { UserDto } from './User'
export type BankAccountDto = {
  id?: string | null
  mapper?: IMapper
  updatedAt?: string
  createdAt?: string
  userId?: string | null
  bankId?: string | null
  currencyScale?: number
  balance?: number
  user?: UserDto
  bank?: BankConfigDto
}
