// localStorage.setItem('name', 'mario')
// localStorage.setItem('age', '20')


// // create method
// let name = localStorage.getItem('name')
// let age = localStorage.getItem('age')

// localStorage.age = '40'


// localStorage.removeItem('name')
// localStorage.clear()

const todos = [
    { text: 'shauh cool', author: 'momo' },
    { text: 'jeane cool', athor: 'josey' },
    { text: 'eric cool', athor: 'eric' }


]

localStorage.setItem('todos', JSON.stringify(todos))

const stored = localStorage.getItem('todos')