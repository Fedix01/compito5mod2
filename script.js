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