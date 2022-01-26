const form = document.querySelector('.signup-form')
// const username = document.querySelector('#username')
const feedback = document.querySelector('.feedback')
const userpattern = /^[a-z]{6,}$/;

form.addEventListener('submit', e => {
    e.preventDefault()

    const username = form.username.value;

    if (userpattern.test(username)) {
        const h2 = document.createElement('h2')
        feedback.textContent = 'that greet choice'
        feedback.prepend('<H2>')
        feedback.append('</H2>')
    } else {
        feedback.textContent = '<h2>no greet choice aaaaaaaaa</h2>'
    }
})


// live checkup
form.username.addEventListener('keyup', e => {
    if (userpattern.test(e.target.value)) {
        form.username.setAttribute('class', 'success')
    }
    else {
        form.username.setAttribute('class', 'error')

    }
})

// const username = 'shauna'
// const pattern = /^[a-z]{6,}$/

// // let result = pattern.test(username)

// // console.log(result)
// let result = username.search(pattern)
