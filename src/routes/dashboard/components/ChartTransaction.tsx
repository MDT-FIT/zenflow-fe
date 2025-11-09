import type { Transaction } from '@/features/bank/models/Transaction'
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts'

interface AggregatedTransactionData {
  date: string
  income: number
  expense: number
}

export const ChartTransaction = ({ transactions }: { transactions: Transaction[] }) => {
  const aggregatedData = Object.values(
    transactions.reduce((acc: Record<string, AggregatedTransactionData>, tx) => {
      const date = tx.date
        ? new Date(tx.date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
          })
        : ''

      if (!acc[date]) acc[date] = { date, income: 0, expense: 0 }

      if (tx.amount >= 0) {
        acc[date].income += tx.amount
      } else {
        acc[date].expense += Math.abs(tx.amount)
      }

      return acc
    }, {})
  )

  const sortedData = aggregatedData
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
    .slice(-7)

  return (
    <ResponsiveContainer width="100%" height="100%">
      <div className="w-fit h-fit bg-input rounded-xl border border-[rgba(255,255,255,0.05)]">
        <BarChart data={sortedData} margin={{ top: 40, right: 40, left: 40, bottom: 40 }}>
          <XAxis dataKey="date" />
          <YAxis
            tickFormatter={(value) =>
              `${transactions[0].currency} ${value.toLocaleString(undefined, {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}`
            }
          />
          <Legend />
          {/* Expense bar */}
          <Bar dataKey="expense" stackId="a" fill="#FFA136" radius={12} />
          {/* Income bar */}
          <Bar dataKey="income" stackId="a" fill="#a0ba84" radius={12} />
        </BarChart>
      </div>
    </ResponsiveContainer>
  )
}
