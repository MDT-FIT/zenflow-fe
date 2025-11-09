import { CardTemplate } from './CardTemplate'
import Icon from '../../../assets/icons/income.svg?react'
import type { StatsDto } from '@/api/dto/StatsDto'

export const IncomeCard = ({ stats, isLoading }: { stats?: StatsDto; isLoading: boolean }) => {
  return (
    <CardTemplate
      isLoading={isLoading}
      type="success"
      title="Income"
      subtitle="for the period"
      stats={stats}
      icon={
        <div className="flex justify-center items-center w-16 h-16 rounded-full bg-primary/20">
          <Icon className="w-7 h-7 mt-1.5" />
        </div>
      }
    />
  )
}
