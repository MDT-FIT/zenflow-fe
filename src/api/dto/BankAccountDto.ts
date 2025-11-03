/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BankConfigDto } from './BankConfigDto'
import type { UserDto } from './UserDto'
export type BankAccountDto = {
  id?: string | null
  updatedAt?: string
  createdAt?: string
  userId?: string
  bankId?: string
  currencyScale?: number
  balance?: number
  user?: UserDto
  bank?: BankConfigDto
}
