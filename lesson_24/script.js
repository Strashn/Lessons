"use strict";

// Задача №1
// Варіант перший
const items = document.querySelectorAll(`.item`)
if (items) {
    items.forEach(item => {
        item.addEventListener("click", () => {
            item.classList.toggle(`active`)
        })
    })
}

// Варіант другий

// const list = document.querySelector(".list")
// if (list) {
//     list.insertAdjacentHTML("beforeend", `<div class="item">Add Item</div>`)

//     document.addEventListener("click", docAction)

//     function docAction(e) {
//         const elemTarget = e.target
//         if (elemTarget.closest(`.item`)) {
//             const currentElem = elemTarget.closest(`.item`)
//             currentElem.classList.toggle(`active`)
//         }
//     }
// }

// Задача №2

window.addEventListener("load", pageLoaded)
function pageLoaded(e) {
    document.body.classList.add(`loaded`)
}


// Задача №3

const header = document.querySelector(`.header`)
const footer = document.querySelector(`.footer`)

if (header && footer) {
    header.addEventListener("mouseenter", changeBgFooter)
    header.addEventListener("mouseleave", changeBgFooter)

    function changeBgFooter(e) {
        footer.style.backgroundColor = e.type === "mouseenter" ? "#bb1111" : "#02023e"
    }

}


// Задача №4

const block = document.querySelector(".block")

function count(block) {
    const number = +block.dataset.count || 7
    const delay = +block.dataset.delay || 1000

    let count = 0
    const timer = setInterval(() => {
        count++
        block.textContent = count
        count === number ? clearInterval(timer) : null
    }, delay)
}

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            block.classList.add(`animate`)
            count(block)
            observer.unobserve(block)
        }
    })
}, {
    threshold: 0.5
})

observer.observe(block)







