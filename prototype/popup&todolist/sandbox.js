// // boolean test
// console.log(true, false, "true", "false");


// // boolean method
// let email = 'luig@mail.com';

// let result = email.includes('@');

// console.log(result)
// const para = document.querySelector('body > h1')
// console.log(para)

// const otherparas = document.querySelectorAll('p')
// otherparas.forEach(otherpara => {
//     console.log(otherpara)


// })
// console.log(otherparas[2])
// const title = document.getElementById('this-id')
// console.log(title)
// const errors = document.getElementsByClassName('error')
// console.log(error)
// errors.forEach(error => {
//     console.log(error)

// // });
// const paras = document.querySelectorAll('p')

// paras.forEach(para => {
//     para.innerText += 'new text'
//     console.log(paras)
// })
// const content = document.querySelector('.content')
// function Royalclick() {

//     content.innerHTML += '<h2>drvt </h2>'

// }
// const people = ['mario', 'luigi', 'newtwo']

// people.forEach(person => {
//     content.innerHTML += `<p>${person}</p>`
// })

// const link = document.querySelector('a');

// console.log(link.getAttribute('href'));
// link.setAttribute('href', 'https://www.ninja.com')
// link.innerText = 'jonh that greet ninja'

// const title = document.querySelector('h1')
// // title.setAttribute('style', 'margin:50px')
// title.style.margin = '50px'
// title.style.color = 'crimson'
// title.style.fontSize = '3em'
// const paras = document.querySelectorAll('p')
// paras.forEach(p => {
//     if (p.textContent.includes('error')) {
//         p.classList.add('error')
//     }
//     else
//         p.classList.add('success')
// })
// const title = document.querySelectorAll('p')
// title.classList.toggle('jojo')
// const article = document.querySelector('article')
// console.log(article.children)
// Array.from(article.children).forEach(child => {
//     child.classList.add('jojo')

// })
// const title = document.querySelector('h2')
// console.log(title.parentElement.parentElement)
// console.log(title.nextElementSibling)
// console.log(title.previousElementSibling)
// console.log(title.nextElementSibling.parentElement.childElementCount)
// const button = document.querySelector('button')
// button.addEventListener('click', () => {
//     console.log('you click on it')
// })
const ul = document.querySelector('ul')
// ul.remove()
const button = document.querySelector('button')
button.addEventListener('click', () => {
    const li = document.createElement('li')
    li.textContent = 'new element'
    ul.prepend(li)
})
const popup = document.querySelector('.popup-wrapper')
const button2 = document.querySelector('.btn-success')
const close = document.querySelector('.popup-close')

button2.addEventListener('click', () => {
    popup.style.display = 'block'
})

close.addEventListener('click', () => {
    popup.style.display = 'none'
})
// const items = document.querySelectorAll('li')
// items.forEach(item => {
//     item.addEventListener('click', e => {
//         // console.log(e.target)
//         // console.log(item)
//         // e.target.style.textDecoration = 'line-through'
//         e.stopPropagation()
//         e.target.remove()
//     })
// })

ul.addEventListener('click', e => {
    // console.log(ul)
    if (e.target.tagName === 'LI') {
        e.target.remove()
    }


})