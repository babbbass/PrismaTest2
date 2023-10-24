import { filterJson } from "../modules/filterJson.js"

test("Test filterJson function", () => {
  const jsonTab = [
    { name: { last: "Carmelo" }, eyeColor: "blue", age: 30 },
    { name: { last: "Lebron" }, eyeColor: "green", age: 25 },
    { name: { last: "IsaIsa" }, eyeColor: "blue", age: 40 },
  ]

  const filters = {
    name: "lebron",
    color: "green",
    age: "25-35",
  }

  const result = filterJson(jsonTab, filters)

  expect(result).toEqual([
    { name: { last: "Lebron" }, eyeColor: "green", age: 25 },
  ])
})
