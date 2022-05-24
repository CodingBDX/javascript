// counter

const counters = document.querySelectorAll('.counter')


function runCounter() {
    counters.forEach(counter => {
        counter.innerText = 0;

        let target = +counter.dataset.count;
        let step = target /300;

        let countIt = function() {
            let displayCount = +counter.innerText;
            if(displayCount < target) {
                counter.innerText = Math.ceil(displayCount + step);
             
             setTimeout(countIt, 1);
                
            }
            else {
                counter.innerText = target;
            }
        }

        countIt();
    })
}

runCounter();

let counterSection = document.querySelector('.counter_section')
let options = {  
    rootMargin :  '0px 0px  -2em 0px',
}

let done = 0;
const sectionObserved = new IntersectionObserver(function(entries) {
    if(entries[0].isIntersecting && done !==1) {
        done = 1;
        runCounter();
    }
}, options)

sectionObserved.observe(counterSection);