export const filterJson = (jsonTab, filters) => {
  let result = jsonTab
  if (filters.name) {
    result = jsonTab.filter((obj) => {
      return obj.name.last.toLowerCase().includes(filters.name)
    })
  }

  if (filters.color) {
    result = result.filter((obj) => {
      return obj.eyeColor.toLowerCase() === filters.color
    })
  }

  if (filters.age) {
    result = result.filter((obj) => {
      const ageMin = filters.age.split("-")[0]
      const ageMax = filters.age.split("-")[1]

      return ageMin <= obj.age && obj.age <= ageMax
    })
  }

  return result
}
