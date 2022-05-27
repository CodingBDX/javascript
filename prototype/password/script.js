const resulEl = document.getElementById('result')
const lengthEl = document.getElementById('length')
const uppercaseEl = document.getElementById('uppercase')
const lowercaseEl = document.getElementById('lowercase')
const numbersEl = document.getElementById('numbers')
const symbolsEl = document.getElementById('symbols')
const generateEl = document.getElementById('generate')
const clipboardEl = document.getElementById('clipboard')


// clipboard take password
clipboardEl.addEventListener('click', () => {
    const textarea = document.createElement('textarea')
    const password = resulEl.innerText

    if(!password) {
        return ''
    } 

    textarea.value = password
    document.body.appendChild(textarea)
    textarea.select()
    document.execCommand('copy')
    textarea.remove()
    alert('password are copied into clipboard')
})

const randomFunct = {
lower : getRandomLower,
upper : getRandomUpper,
number : getRandomNumber,
symbol : getRandomSymbol
}

generateEl.addEventListener('click', () => {
    const length = +lengthEl.value
    const hasUpper = uppercaseEl.checked
    const hasLower = lowercaseEl.checked
    const hasNumbers = numbersEl.checked
    const hasSymbols = symbolsEl.checked
    
    

    resulEl.innerHTML = generatePassword( hasLower, hasNumbers, hasSymbols, hasUpper, length)

    
})

function generatePassword(lower, upper, number, symbol, length) {
let generatePassword = ''

const typesCount = lower + upper + number + symbol 
const typesArray = [{lower}, {upper} , {number}, {symbol}].filter(item => Object.values(item)[0])

if (typesCount === 0){
    return ''
}

for(let i = 0; i < length; i += typesCount){
    typesArray.forEach(type => {
        
        const functName = Object.keys(type)[0]
generatePassword += randomFunct[functName]() 
    })
}

const finalPassword = generatePassword.slice(0, length)
return finalPassword
}

function getRandomLower() {
return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
}

function getRandomUpper() {
return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
}


function getRandomNumber() {
return String.fromCharCode(Math.floor(Math.random() * 10) + 48)
}


function getRandomSymbol() {
const symbols = '!%£$µ¨@^\`|[{#'
return symbols[Math.floor(Math.random() * symbols.length)]
}

console.log(getRandomLower())