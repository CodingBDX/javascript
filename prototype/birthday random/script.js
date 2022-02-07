const tagsEl = document.getElementById('tags')
const textarea = document.getElementById('textarea')

textarea.focus()

textarea.addEventListener('keyup', (e) => {
    createTags(e.target.value)

    if (e.key === 'Enter') {
        setTimeout(() => {
            e.target.value = ''
        }, 10)

        randomSelect()
    }
})

function createTags(input) {

    const tags = input.split(',').filter(tag => tag.trim() !== '').map(tag => tag.trim())
    console.log(tags)

    tagsEl.innerHTML = ''

    tags.forEach(tag => {
        const tagEl = document.createElement('span')
        tagEl.classList.add('tag')
        tagEl.innerText = tag
        tagsEl.appendChild(tagEl)
    });
}

function randomSelect() {
    const showage = document.querySelector('.age')

    const times = 30
    const interval = setInterval(() => {

        const randomTag = PickRandomTag()

        hightlightTag(randomTag)

        setTimeout(() => {
            unhightlightTag(randomTag)
        }, 100)
    }, 100);


    setTimeout(() => {
        clearInterval(interval)

        setTimeout(() => {
            const randomTag = PickRandomTag()

            hightlightTag(randomTag)
            showage.innerHTML = `<div class="age"><p>Good Birthday friend</p>
            <br><img src="happy-birthday-cake-with-balloon.png" alt="" srcset="">

            
            </div>`

        }, 100);
    }, times * 100);


}

function PickRandomTag() {
    const tags = document.querySelectorAll('.tag')
    return tags[Math.floor(Math.random() * tags.length)]
}

function hightlightTag(tag) {
    tag.classList.add('hightlight')


}

function unhightlightTag(tag) {
    tag.classList.remove('hightlight')
}


