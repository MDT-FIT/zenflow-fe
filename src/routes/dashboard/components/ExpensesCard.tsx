import { CardTemplate } from './CardTemplate'
import Icon from '../../../assets/icons/expenses.svg?react'
import type { StatsDto } from '@/api/dto/StatsDto'

export const ExpensesCard = ({ stats, isLoading }: { stats?: StatsDto; isLoading: boolean }) => {
  return (
    <CardTemplate
      stats={stats}
      type="alert"
      title="Expenses"
      isLoading={isLoading}
      subtitle="for the period"
      icon={
        <div className="flex justify-center items-center w-16 h-16 rounded-full bg-destructive/20">
          <Icon className="w-7 h-7 mt-1.5" />
        </div>
      }
    />
  )
}
