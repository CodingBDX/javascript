# double heart
---
## url test
https://htmlpreview.github.io/?https://github.com/CodingBDX/javascript/blob/main/prototype/double-heart/index.html

## valeur dans css
on peut ecrire des valeurs dans le background url
```css
background: url('') no-repeat center center/cover;
```

margin:auto; pour centrer une image

## javascript

pour ecouter un double click
```js

loveMe.addEventListener('click', (e) => {

    if(clickTime === 0) {
        clickTime = new Date().getTime()
    } else {
        if((new Date().getTime() - clickTime) < 800) {
             createHeart(e);
             clickTime = 0;
             
        } else {
            clickTime = new Date().getTime()
        }
    }
})

```

on ecoute le click est on lui applique des millisecondes 800, pour voir si c'est un vrai double clique et on lui applique une date et un time pour voir si on a deja fait l'action


```js
const createHeart = (e) => {
    const heart = document.createElement('div')
    heart.classList.add('heart')
    heart.innerHTML = `${getRandomAvatar()}`

    const x = e.clientX;
    const y = e.clientY;

    const leftOffSet = e.target.offsetLeft;
    const topOffSet = e.target.offsetTop;

    const xInside = x - leftOffSet;
    const yInside = y - topOffSet;

    heart.style.left = `${xInside}px`;
    heart.style.top = `${yInside}px`;

    loveMe.appendChild(heart)
    times.innerHTML = timesClicked++;

    setTimeout(() =>
        heart.remove()
    , 10000);
}

```

ensuite on invoque les elements en function de la position de l'utilisateur et on imbrique les elements créés avec heart.style.left est on lui donne la position. un setTimeout pour effacer les elements une fois créé