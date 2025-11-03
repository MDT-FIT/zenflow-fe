export interface BankConfig {
  name: string
  apiLink: string
  logo: string
  isEnabled: boolean
}

export const BankConfig = {
  create,
}

export function create(init?: Partial<BankConfig>): BankConfig {
  return {
    isEnabled: init?.isEnabled ?? false,
    name: init?.name ?? '',
    apiLink: init?.apiLink ?? '',
    logo: init?.logo ?? '',
  }
}
