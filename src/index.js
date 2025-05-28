
function refreshData (response) {

    let temperatureElement = document.querySelector("#temperature");
    let clearTemperature = response.data.temperature.current;
    let cityElement = document.querySelector("#city-id");
    let descriptionElement = document.querySelector("#description");
    let humidityElement = document.querySelector("#humidity");
    let windElement = document.querySelector("#wind");
    let iconElement = document.querySelector("#icon");
    let date = new Date (response.data.time * 1000);

      
    iconElement.innerHTML = `<img src="${response.data.condition.icon_url}" class="weather-icon">`
    windElement.innerHTML = `${response.data.wind.speed}km/h`;
    humidityElement.innerHTML = `${response.data.temperature.humidity}%`;
    cityElement.innerHTML = response.data.city;
    descriptionElement.innerHTML = response.data.condition.description;
    temperatureElement.innerHTML = Math.round(clearTemperature);
    let timeElement = document.querySelector("#time");
    timeElement.innerHTML= createDate (date);

}

function createDate (date) {
    
    
    let hours = date.getHours();
    let minutes = date.getMinutes();
    if (minutes < 10){minutes = `0${minutes}`};

    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'
    ]

    let day = days[date.getDay()];

    

    return`${day} ${hours}:${minutes},`;
    
}


function searchCity(city) {

    let apiKey = "o264bt8e7db718ffba5d20417c0b8fa3";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(refreshData);
}


function handleSearchInput (event){
    event.preventDefault();
    {
        let searchInput=document.querySelector("#form-input-id");
        
        searchCity(searchInput.value)
    }
}
let searchFormElement= document.querySelector(".formular");
searchFormElement.addEventListener("submit", handleSearchInput);

function getForecast (city) {
    let apiKey = "o264bt8e7db718ffba5d20417c0b8fa3";
    let apiUrlforecast = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}`
axios.get(apiUrlforecast).then(displayForecast);
}







function displayForecast(){



let days = [`Tue`, `Wed`, `Thur`, `Fri`, `Sat`];
let forecastHTML = " ";

days.forEach(function (day) {
    forecastHTML = forecastHTML + 
    `    <div class="weather-forecast-day">
        <div class="forecast-day">${day}</div>
        <div class="forecast-icon">🌤</div>
        <div class="forecast-temperatures">
            <div class="forecast-temperature">19°</div>
            <div class="forecast-temperature">12°</div>
        </div>
    </div>`
;
});
let forecastElement = document.querySelector("#forecast");
forecastElement.innerHTML = forecastHTML;
}
displayForecast();
searchCity("Hamburg");
getForecast("Hamburg")
