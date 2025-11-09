import { Input } from '@/components/ui/input'
import { useState, type ChangeEvent } from 'react'

export interface SearchBarProps {
  value: string
  onChange: (value: string) => void
}

export const SearchBar = ({ value, onChange }: SearchBarProps) => {
  const [query, setQuery] = useState<string>()

  let debounceTimer: ReturnType<typeof setTimeout>

  const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value ?? ''

    setQuery(event.target.value ?? '')

    clearTimeout(debounceTimer)

    debounceTimer = setTimeout(() => {
      onChange(value)
    }, 500)
  }

  return (
    <Input
      value={query ?? value}
      placeholder="Search"
      onChange={handleInput}
      className="w-full p-4"
    />
  )
}
