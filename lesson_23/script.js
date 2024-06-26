"use strict";

// Задача №1

// const bodyElement = document.body
// console.log(bodyElement)


// Задача №2

// const list = document.querySelector(`.list`)

// if (list) {
//     const newUl = document.createElement(`ul`)
//     function addList(n = 6) {

//         for (let i = 1; i <= n; i++) {
//             const newLi = document.createElement(`li`)
//             newLi.textContent = `Task ${i}`
//             newUl.append(newLi)
//             console.log(newLi)
//         }
//         list.append(newUl)
//     }
//     addList(5)
//     addList()
//     addList(0)
// }


// Задача №3
// const body = document.body
// if (body) {
//     body.classList.add(`loaded`)
// }

// if (body.classList.contains(`loaded`)) {
//     body.style.color = `green`
// }


// Задача №4

// const items = document.querySelectorAll(`.item`)
// if (items) {
//     items.forEach((item, index) => {
//         item.textContent = `Елемент №${index + 1}`
//         item.classList.add(`active`)
//     })
// }


// Задача №5

// const button = document.querySelector(`.button`)
// if (button) {
//     function scrollToButton(element) {
//         const block = element.dataset.scroll
//         element.scrollIntoView({
//             block: `center`,
//             inline: `nearest`,
//             behavior: `smooth`
//         })
//     }
//     scrollToButton(button)
// }



// Задача №6

// const link = document.querySelector(`.link`)
// console.log(link)
// if (link) {
//     link.dataset.newValue = '100'
//     const newValue = parseInt(link.dataset.newValue)
//     if (newValue < 200) {
//         link.style.color = `red`
//     }
// }












