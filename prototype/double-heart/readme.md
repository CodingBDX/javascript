# double heart
---

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