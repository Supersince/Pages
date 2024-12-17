const container = document.querySelector(".container")
const coffees = [
  { name: "Perspiciatis", image: "images/6.jpg" },
  { name: "Voluptatem", image: "images/7.jpg" },
  { name: "Explicabo", image: "images/8.jpg" },
  { name: "Rchitecto", image: "images/asf.jpg" },
  { name: " Beatae", image: "images/d.jpg" },
  { name: " Vitae", image: "images/images.jpg" },
  { name: "Inventore", image: "images/random.webp" },
  { name: "Veritatis", image: "images/s.jpg" },
  { name: "Accusantium", image: "images/9.jpg" },
]
const showCoffees = () => {
  let output = ""
  coffees.forEach(
    ({ name, image }) =>
      (output += `
              <div class="card">
                <img class="card--avatar" src=${image} />
                <h1 class="card--title">${name}</h1>
                <a class="card--link" href="#">View</a>
              </div>
              `)
  )
  container.innerHTML = output
}

document.addEventListener("DOMContentLoaded", showCoffees)
if ("serviceWorker" in navigator) {
  window.addEventListener("load", function() {
    navigator.serviceWorker
      .register("/serviceWorker.js")
      .then(res => console.log("service worker registered"))
      .catch(err => console.log("service worker not registered", err))
  })
}