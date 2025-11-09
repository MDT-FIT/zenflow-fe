import type { StatsDto } from '@/api/dto/StatsDto'
import { cn } from '@/lib/utils'
import { Loader2 } from 'lucide-react'
import type { ReactNode } from 'react'

export interface CardTemplateProps {
  title: string
  subtitle: string
  type: 'alert' | 'success'
  icon: ReactNode
  isLoading: boolean
  stats?: StatsDto
}

export const CardTemplate = ({
  title,
  subtitle,
  type,
  icon,
  isLoading,
  stats,
}: CardTemplateProps) => {
  const formatted = stats?.currency
    ? new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: stats.currency,
      }).format(stats.amount)
    : ''

  const change = stats?.changePercentage ?? 0

  return (
    <div className="flex gap-6 items-center bg-input px-8 py-4 w-full rounded-lg border border-[rgba(255,255,255,0.05)]">
      {icon}
      <div className="flex flex-col gap-1">
        {isLoading ? (
          <div className="w-full h-full flex justify-center items-center">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
          </div>
        ) : (
          <>
            <p className={cn('text-sm', type === 'alert' ? 'text-destructive' : 'text-primary')}>
              {title}
            </p>
            <p className="text-3xl text-white font-medium">
              {type === 'alert' ? `-${formatted}` : formatted}
              <span
                className={cn('text-sm ml-2', change > 0 ? 'text-primary' : 'text-destructive')}
              >
                {change > 0 ? '+' : '-'} {Math.abs(change)} %
              </span>
            </p>
            <p className="subtitle">{subtitle}</p>
          </>
        )}
      </div>
    </div>
  )
}
