const mainContainer = document.querySelector(".rating-state-start")
const thanksContainer = document.querySelector(".thanks-state")
const sumbitButton = document.getElementById("submit")
const rateAgain = document.getElementById("rate-again")
const rating = document.getElementById("user-selected-rating")
const rates = document.querySelectorAll(".ratings-li-btn")

sumbitButton.addEventListener("click", () => {
    thanksContainer.classList.remove("display-none")
    mainContainer.classList.add("display-none")
})

rateAgain.addEventListener("click", () => {
    thanksContainer.classList.add("display-none")
    mainContainer.classList.remove("display-none")
})

rates.forEach((rate) => {
    rate.addEventListener("click", () => {
        rating.innerHTML = rate.innerHTML
    })
})