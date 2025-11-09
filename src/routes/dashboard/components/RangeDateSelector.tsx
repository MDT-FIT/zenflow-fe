import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { Label } from '@radix-ui/react-label'
import { ChevronDownIcon } from 'lucide-react'
import { useState } from 'react'
import type { DateRange } from 'react-day-picker'

export type RangeDateSelectorProps = {
  value: DateRange
  onChange: (range: DateRange) => void
  label?: string
}

export function RangeDateSelector(props: RangeDateSelectorProps) {
  const { value, label, onChange, ...rest } = props
  const [open, setOpen] = useState(false)
  const [dateRange, setDateRange] = useState(value)

  let debounceTimer: ReturnType<typeof setTimeout>

  const handleInput = (range: DateRange) => {
    setDateRange(range)

    clearTimeout(debounceTimer)

    debounceTimer = setTimeout(() => {
      onChange(range)
    }, 500)
  }

  return (
    <div className="flex flex-col gap-3">
      {label && (
        <Label htmlFor="date" className="px-1">
          {label}
        </Label>
      )}
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="secondary"
            id="date"
            size="lg"
            className="w-fit  justify-between font-normal"
          >
            {dateRange
              ? `${dateRange.from?.toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'short',
                  day: 'numeric',
                })} - ${dateRange.to?.toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'short',
                  day: 'numeric',
                })}`
              : 'Select date'}
            <ChevronDownIcon />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto overflow-hidden p-0" align="start">
          <Calendar
            mode="range"
            required
            numberOfMonths={1}
            className="rounded-lg border shadow-sm"
            defaultMonth={value.from}
            selected={dateRange}
            onSelect={handleInput}
            {...rest}
          />
        </PopoverContent>
      </Popover>
    </div>
  )
}
