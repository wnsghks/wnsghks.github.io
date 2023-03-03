navigator.geolocation.getCurrentPosition(getSuccess, getFail);
const API_KEY = "45ce355c45c7cae92c3609cea4e33de2";

function getSuccess(position){
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    const nowWeather = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
    fetch(nowWeather)
        .then((response) => response.json())
        .then((data) => {
            const weather = document.querySelector(".weather span")
            weather.innerText = `${data.name}, ${data.weather[0].main}`;
        });
}

function getFail(){
    alert('Geolocation Error');
}
