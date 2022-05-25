const textEl = document.getElementById('text')
const speedEl = document.getElementById('speed')

const text = [
'javascript',
'php',
'framework',
'css']
let idx = 100

let speed = 1500 / speedEl.value

writeText()

function writeText()  {

    textEl.innerText = getRandomQuality().slice(0, idx)

    idx++

    if(idx > getRandomQuality().length) {

        idx = 100

    }

    setTimeout(writeText, speed)
}

speedEl.addEventListener('input', (e) => {
    speed = 300 / e.target.value;
})

function getRandomQuality() {
    return text[Math.floor(Math.random() * text.length)];
}