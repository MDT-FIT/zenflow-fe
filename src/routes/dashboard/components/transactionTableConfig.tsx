'use client'

import * as React from 'react'
import { type ColumnDef } from '@tanstack/react-table'
import type { Transaction } from '@/features/bank/models/Transaction'
import { ArrowUpDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { cn } from '@/lib/utils'
import { TransactionTypeBadge } from './TransactinTypeBadge'
import { TransactinResultBadge } from './TransactinResultBadge'

export const columns: ColumnDef<Transaction>[] = [
  {
    id: 'select',
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() || (table.getIsSomePageRowsSelected() && 'indeterminate')
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'accountId',
    header: 'Account',
    cell: ({ row }) => <div className="capitalize table-text">{row.getValue('accountId')}</div>,
  },
  {
    accessorKey: 'type',
    header: () => <div className="text-left">Type</div>,
    cell: ({ row }) => <TransactionTypeBadge type={row.getValue('type')} />,
  },
  {
    accessorKey: 'amount',
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Amount
          <ArrowUpDown />
        </Button>
      )
    },
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue('amount'))
      const formatted = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: row.original.currency,
      }).format(amount)

      return (
        <div className={cn('font-medium', amount > 0 ? 'amount-plus' : 'amount-minus')}>
          {formatted}
        </div>
      )
    },
  },
  {
    accessorKey: 'date',
    header: () => <div className="text-left">Date</div>,
    cell: ({ row }) => {
      const date: string = row.getValue('date') ?? ''

      return (
        <div className="table-text">
          {new Date(date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
          })}
        </div>
      )
    },
  },
  {
    accessorKey: 'result',
    header: () => <div className="text-left">Result</div>,
    cell: ({ row }) => <TransactinResultBadge result={row.getValue('result')} />,
  },
]
