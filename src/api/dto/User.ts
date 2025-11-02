/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BankAccountDto } from './BankAccount'
import type { IMapper } from './IMapper'
export type UserDto = {
  id?: string | null
  mapper?: IMapper
  updatedAt?: string
  createdAt?: string
  username?: string | null
  email?: string | null
  accountIds?: Array<string> | null
  accounts?: Array<BankAccountDto> | null
}
