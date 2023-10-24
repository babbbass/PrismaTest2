import "./style.css"
import { filterForm, saveForm } from "./modules/filterForm"
import { filterJson } from "./modules/filterJson"

var xhr = new XMLHttpRequest()
xhr.open("GET", "datas.json", true)

xhr.onreadystatechange = function () {
  if (xhr.readyState === 4 && xhr.status === 200) {
    let jsonData = JSON.parse(xhr.responseText)
    const filter = retrieveFilterUrl()

    if (filter !== undefined) {
      jsonData = filterJson(jsonData, filter)
    }
    saveForm()
    fillTable(jsonData)
  }
}

const jsonData = xhr.send()

const fillTable = (data, filter) => {
  let tbody = document.querySelector("#table_body")

  data.forEach(function (client) {
    var row = tbody.insertRow()
    var cellLastName = row.insertCell(0)
    var cellFirstName = row.insertCell(1)
    var cellAge = row.insertCell(2)
    var cellEyesColor = row.insertCell(3)
    var cellEmail = row.insertCell(4)
    var cellCompany = row.insertCell(5)
    var cellAmount = row.insertCell(6)

    cellLastName.innerHTML = client.name.last
    cellFirstName.innerHTML = client.name.first
    cellAge.innerHTML = client.age
    cellEyesColor.innerHTML = client.eyeColor
    cellEmail.innerHTML = client.email
    cellCompany.innerHTML = client.company
    cellAmount.innerHTML = client.balance
  })
}

const retrieveFilterUrl = () => {
  let nameParam = {}
  const queryString = window.location.search
  if (queryString === "") return

  const urlParams = new URLSearchParams(queryString)
  const params = urlParams.entries()

  for (const param of params) {
    nameParam[param[0]] = param[1]
  }

  return nameParam
}

filterForm
