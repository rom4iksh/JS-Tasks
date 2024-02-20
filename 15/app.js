const currentTime = document.getElementById('currentDateTime');

const current = {
    temp: document.getElementById('currentTemp'),
    status: document.getElementById('currentStatus'),
    speed: document.getElementById('currentSpeed'),
    img: document.getElementById('currentImg')
}

const days = document.getElementById('days')

setInterval(() => {
    const date = new Date();
    currentTime.textContent = date.toLocaleTimeString();
})



const createDays = (date, time, img, temp) => {
    const template = `
        <li class="forecastData">
                <div class="forecastDataCol">
                    <span id="dayDate" class="dayDate">${date}</span>
                    <span id="dayDateTime" class="dayDateTime">${time}</span>
                </div>
                <div class="forecastDataCol">
                    <img class="dayImg" src="http://openweathermap.org/img/wn/${img}@2x.png" alt="weather"/>
                </div>
                <div class="forecastDataCol">
                    <span class="dayTemp">${temp}&#8451;</span>
                </div>
            </li>
    `
    
    days.insertAdjacentHTML('beforeend', template)
}

const lat = 53.893009
const lon = 27.567444
apiKey = '7041d2646ff0ba0d0d495616adbfd888'

fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}`)
    .then(response => response.json())
    .then(data => {
        const currentData = data.current
        const dailyData = data.daily

        current.temp.textContent = (currentData.temp - 273.15).toFixed(0) + '°C'
        current.status.textContent = currentData.weather[0].description[0].toUpperCase() + currentData.weather[0].description.slice(1)
        current.speed.textContent = (currentData.wind_speed).toFixed(0) + ' m/s'
        current.img.src = `http://openweathermap.org/img/wn/${currentData.weather[0].icon}@2x.png`

        dailyData.forEach(day => {
            let dayDate = new Date(day.dt * 1000)
            const dayTime = new Date(dayDate.getTime() - dayDate.getTimezoneOffset() * 60 * 1000).toLocaleTimeString()
            createDays(dayDate.toLocaleDateString(), dayTime, day.weather[0].icon, (day.temp.day - 273.15).toFixed(0))
        })
    })
