/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BankNameDto } from './BankName'
import type { IMapper } from './IMapper'
export type BankConfigDto = {
  id?: string | null
  mapper?: IMapper
  updatedAt?: string
  createdAt?: string
  name?: BankNameDto
  currency?: string | null
  apiLink?: string | null
  logo?: string | null
  isEnabled?: boolean
}
