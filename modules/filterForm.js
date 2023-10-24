export const filterForm = document.addEventListener("DOMContentLoaded", () => {
  document
    .querySelector("#filterForm")
    .addEventListener("submit", function (event) {
      event.preventDefault()

      let nameValue = document.querySelector("#name").value
      let colorValue = document.querySelector("#color").value
      let agesValue = document.querySelector("#age").value

      // Save Data in localStorage
      localStorage.setItem("name", nameValue)
      localStorage.setItem("color", colorValue)
      localStorage.setItem("ages", agesValue)

      let url = window.location.origin
      // add parameter to url
      let newUrl =
        url +
        (url.includes("?") ? "&" : "?") +
        "name=" +
        nameValue +
        "&color=" +
        colorValue +
        "&age=" +
        agesValue

      // Redirect towards new url
      window.location.href = newUrl
    })

  document.querySelector("#clear_form").addEventListener("click", () => {
    const form = document.querySelector("#filterForm")
    form.reset()
  })
})

export const saveForm = () => {
  document.querySelector("#name").value = localStorage.getItem("name") || ""
  document.querySelector("#color").value = localStorage.getItem("color") || ""
  document.querySelector("#age").value = localStorage.getItem("ages") || ""
}
