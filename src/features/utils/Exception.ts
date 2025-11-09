export type ExceptionLevel = 'error' | 'warning' | 'info'

export enum ExceptionNames {
  InternalException = 'Internal Exception',
  NetworkException = 'Network Exception',
  ValidationException = 'Validation Exception',
  AuthenticationException = 'Authentication Exception',
  UnknownException = 'Unknown Exception',
}

export interface Exception extends Error {
  title: string
  message: string
  level: ExceptionLevel
  silent: boolean
}

export class Exception implements Exception {
  constructor({
    name = '',
    title = '',
    message = '',
    level = 'error',
    silent = false,
  }: {
    name?: string
    title?: string
    message?: string
    level?: ExceptionLevel
    silent?: boolean
  }) {
    this.name = name
    this.title = title
    ;((this.message = message
      ? `[${title ?? ExceptionNames.UnknownException}] - ${message}`
      : `[${ExceptionNames.UnknownException}] - An unknown error has occurred.`),
      (this.level = level))
    this.silent = silent
  }
}
