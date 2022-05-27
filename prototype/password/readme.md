# password generator
---
## url test


## function clipboard
```js
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
```

on cree un textarea, on recupere les infos du password, on les mets le password dans le value, puis on selectionne et on execute une copy, puis on remove le textarea et on envoit une alert


```js
function getRandomLower() {
return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
}
```
pour generer aleatoirement des caracteres avec la function math floor et on prend une valeur ascii en html (dans la documentation)

```js

generateEl.addEventListener('click', () => {
    const length = +lengthEl.value
    const hasUpper = uppercaseEl.checked
    const hasLower = lowercaseEl.checked
    const hasNumbers = numbersEl.checked
    const hasSymbols = symbolsEl.checked
    
    

    resulEl.innerHTML = generatePassword( hasLower, hasNumbers, hasSymbols, hasUpper, length)

    
})
```
on recupere l'ensemble des valeurs des checkbox et du length

```js
function generatePassword(lower, upper, number, symbol, length) {
let generatePassword = ''

const typesCount = lower + upper + number + symbol 
const typesArray = [{lower}, {upper} , {number}, {symbol}].filter(item => Object.values(item)[0])

if (typesCount === 0){
    return ''
}
```

pour generer les caracteres ont recupere l'ensemble des donnees et ont les additionnes et on prend la premiere donnee dans chaque resultat array

```js

for(let i = 0; i < length; i += typesCount){
    typesArray.forEach(type => {
        
        const functName = Object.keys(type)[0]
generatePassword += randomFunct[functName]() 
    })
}

const finalPassword = generatePassword.slice(0, length)
return finalPassword
}
```

il faut calculer la longueur (length)  et adapter le resultat en fonction de cette longueur