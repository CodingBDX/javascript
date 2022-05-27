const cityForm = document.querySelector('form')
const card = document.querySelector('.card')
const details = document.querySelector('.details')
const time = document.querySelector('img.time')
const icon = document.querySelector('.icon img')
const forecast = new Forecast;

// update interface
const updateUI = (data) => {
    // const cityDets = data.cityDets
    // const weather = data.weather
    const { cityDets, weather } = data
    // update ui from data
    details.innerHTML = `
    <h5 class="my-3">City name: ${cityDets.EnglishName}</h5>
    <div class="my-3">weather conditions:${weather.WeatherText}</div>
    <div class="display-4 my-4">
        <span>temp:${weather.Temperature.Metric.Value}</span>
        <span>&deg;C</span>
    </div>

     `
    const iconSrc = `/img/icons/${weather.WeatherIcon}.svg`

    icon.setAttribute('src', iconSrc)

    let timeSrc = weather.IsDayTime ? '/img/day.svg' : 'img/night.svg'
    // let timeSrc = null
    // if (weather.IsDayTime) {
    //     timeSrc = '/img/day.svg'
    // } else {
    //     timeSrc = 'img/night.svg'
    // }
    time.setAttribute('src', timeSrc)

    // remove class d-none
    if (card.classList.contains('d-none')) {
        card.classList.remove('d-none')
    }
}

// const updateCity = async (city) => {
//     const cityDets = await getCity(city)
//     const weather = await getWeather(cityDets.Key)

//     return {
//         cityDets, weather
//     }
// }

cityForm.addEventListener('submit', e => {

    e.preventDefault()

    const city = cityForm.city.value.trim()
    cityForm.reset()
    // const stored = localStorage.setItem('city')
    forecast.updateCity(city).then(data =>

        updateUI(data)
    ).catch(err => console.log(err))

    localStorage.setItem('city', city)

})
if (localStorage.getItem('city')) {
    forecast.updateCity(localStorage.getItem('city'))
        .then(data => updateUI(data))
        .catch(err => console.log(err))
}

