import { useLocation, useHistory } from 'react-router'

export function useUrlQuery() {
  const location = useLocation()
  const history = useHistory()
  const query = new URLSearchParams(useLocation().search)

  function setUrlQuery(newQuery) {
    for (const q in newQuery) {
      const value = newQuery[q]
      if (value === null || value === undefined) {
        continue
      }
      query.set(q, value)
    }

    history.push({ ...location, search: `?${query.toString()}` })
  }

  const values = {}
  query.forEach((val, key) => (values[key] = val))
  return [values, setUrlQuery]
}
