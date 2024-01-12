let myCards = document.getElementsByClassName("card");

for (let cards of myCards) {
    cards.addEventListener("mouseenter", (event) => {
        event.target.classList.add("zoom")
    })
}

for (let cards of myCards) {
    cards.addEventListener("mouseleave", (event) => {
        event.target.classList.remove("zoom")
    })
}

let myLogos = document.getElementsByClassName("fa-bookmark");

for (let logo of myLogos) {
    logo.addEventListener("mouseenter", (event) => {
        event.target.classList.add("book-page")
    })
}

for (let logo of myLogos) {
    logo.addEventListener("mouseleave", (event) => {
        event.target.classList.remove("book-page")
    })
}