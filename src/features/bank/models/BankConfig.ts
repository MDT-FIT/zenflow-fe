export interface BankConfig {
  id: string,
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
    id: init?.id ?? '',
    isEnabled: init?.isEnabled ?? false,
    name: init?.name ?? '',
    apiLink: init?.apiLink?.trim() ?? '',
    logo: init?.logo ?? '',
  }
}
