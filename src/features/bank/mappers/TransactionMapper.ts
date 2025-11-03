import type { BankConfigDto } from "@/api/dto/BankConfigDto"
import type { BankConfig } from "../models/BankConfig"
import { BankMapper } from "./BankMapper"
import type { TransactionDto } from "@/api/dto/TransactionDto"
import type { Transaction } from "../models/Transaction"
import { TransactionResultMapper } from "./TransactionResultMapper"
import { TransactionTypeMapper } from "./TransactionTypeMapper"

export const TransactionMapper = {
    toDomain
}

export function toDomain(dto: TransactionDto): Transaction {
    return {
        amount: dto.amount,
        accountId: dto.accountId,
        userId: dto.userId,
        scale: dto.scale,
        currency: dto.currency,
        date: dto.dateTime ?? null,
        result: TransactionResultMapper[dto.result],
        type: TransactionTypeMapper[dto.transactionType],
    }
}