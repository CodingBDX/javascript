# toast notification 
---
## effet grossir
pour faire un effet sur le click il faut marquer la propriete suivi de :active et de faire une transform de scale
```css
.btn {
    transform: scale(0.98)
}
```

il faut chercher dans le dom le button et la notification a afficher puis au click appeler la function qui creer les notifications et va chercher dans un array les messages
```css
button.addEventListener('click', () => createNotification());
console.log('123');
function createNotification() {
    const notif = document.createElement('div');
    notif.classList.add('toast');
    
    notif.innerText = getRandomMessage();

    toasts.appendChild(notif);
}

```
ensuite pour afficher au hasard on créé une function pour prendre les valeurs de l'array au hasard
```css
    return messages[Math.floor(Math.random() * messages.length)];

```
un petit setTimout pour faire disparait les message au bout de X temps
```css

```