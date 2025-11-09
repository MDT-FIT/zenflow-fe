import { useSearchParams } from 'react-router-dom'

export const useSearchParamsFilters = () => {
  const [searchParams, setSearchParams] = useSearchParams()

  const setFilters = (obj: Record<string, string>) => {
    const newParams = new URLSearchParams(searchParams)

    Object.keys(obj).map((key) => newParams.set(key, obj[key]))

    setSearchParams(newParams)
  }
  const getFilter = (key: string) => searchParams.get(key) ?? ''

  return {
    getFilter,
    setFilters,
  }
}
