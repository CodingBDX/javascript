const loveMe = document.querySelector('.loveMe')
const times = document.querySelector('#times')
let clickTime = 0;
let timesClicked = 1;

const smiley = [
    '🐹',
    '🍔',
'🦅',
'🧙',
'♥️',
'🙉',
'🧚',

]

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


function getRandomAvatar() {
    return smiley[Math.floor(Math.random() * smiley.length)];
}
