
function refreshData (response) {

    let temperatureElement = document.querySelector("#temperature");
    let clearTemperature = response.data.temperature.current;
    let cityElement = document.querySelector("#city-id");
    let descriptionElement = document.querySelector("#description");
    let humidityElement = document.querySelector("#humidity");
    let windElement = document.querySelector("#wind");
    windElement.innerHTML = `${response.data.wind.speed}km/h`;
    humidityElement.innerHTML = `${response.data.temperature.humidity}%`;
    cityElement.innerHTML = response.data.city;
    descriptionElement.innerHTML = response.data.condition.description;
    temperatureElement.innerHTML = Math.round(clearTemperature);

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

searchCity("Hamburg");