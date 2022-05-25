# auto-text
---

## url text
https://htmlpreview.github.io/?https://github.com/CodingBDX/javascript/blob/main/prototype/auto-text/index.html

## dom

```css
const textEl = document.getElementById('text')
const speedEl = document.getElementById('speed')

const text = [
'javascript',
'php',
'framework',
'css']
let idx = 100

let speed = 1500 / speedEl.value

```

on va chercher dans le dom les elements qu'on a besoin, puis comme d'habitude un array avec les mots que l'on veut afficher. une idx pour savoir la longueur que l'on veut afficher 1 pour chaque lettre, evidemment la vitesse qui est déterminé par notre value dans l'input speed


```js
writeText()

function writeText()  {

    textEl.innerText = getRandomQuality().slice(0, idx)

    idx++

    if(idx > getRandomQuality().length) {

        idx = 100

    }

    setTimeout(writeText, speed)
}

```

la function qui permet d'afficher le text innertext, on prend les mots et on les coupes slice jusqu'a la valeur indiqué et on ajoute a chaque fois idx++. quand idx est superieur a la longueur du mot on etablie idx a 100
un timeout sur la vitesse

```js
speedEl.addEventListener('input', (e) => {
    speed = 300 / e.target.value;
})

```
pour ecouter la valeur d'un input qui va jouer sur la vitesse