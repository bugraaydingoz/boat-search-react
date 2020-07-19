const itemsPerPage = 10

function getUrlValues(urlQuery) {
  const { q, minLength, maxLength, minYear, maxYear } = urlQuery
  return {
    q: q ? q : null,
    minLength: minLength ? Number(minLength) : null,
    maxLength: maxLength ? Number(maxLength) : null,
    minYear: minYear ? Number(minYear) : null,
    maxYear: maxYear ? Number(maxYear) : null,
  }
}

function filterByText(q, boat) {
  const { name, type, locality, country } = boat
  const textFields = [
    name?.toLowerCase(),
    type?.toLowerCase(),
    locality?.toLowerCase(),
    country?.toLowerCase(),
  ]
  return !textFields.some((t) => t.includes(q.toLowerCase()))
}

export function useFilter(boats = [], urlQuery) {
  const { q, minLength, maxLength, minYear, maxYear } = getUrlValues(urlQuery)

  const filteredBoats = boats.filter((boat) => {
    if (q && filterByText(q, boat)) {
      return false
    }

    if (minLength && boat.length < minLength) {
      return false
    }

    if (maxLength && boat.length > maxLength) {
      return false
    }

    if (minYear && boat.year < minYear) {
      return false
    }

    if (maxYear && boat.year > maxYear) {
      return false
    }

    return true
  })

  const paginatedBoats = filteredBoats.slice(
    Number(urlQuery.page - 1) * itemsPerPage,
    Number(urlQuery.page) * itemsPerPage
  )

  const totalPages = Math.ceil(filteredBoats.length / itemsPerPage)

  return { paginatedBoats, totalPages, length: filteredBoats.length }
}
