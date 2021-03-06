var button = document.querySelector('.searchBtn')
var inputValue = document.querySelector('.inputValue')
var name = document.querySelector('.name');
var date = document.querySelector('.date');
var weather = document.querySelector('.weather-conditions');
var temp = document.querySelector('.temp');
var humidity = document.querySelector('.humidity');
var wind = document.querySelector('.wind-speed');
var index = document.querySelector('.uv-index');

button.addEventListener('click', function() {
event.preventDefault()
fetch('https://api.openweathermap.org/data/2.5/forecast?q='+ inputValue.value +'&cnt=5&units=imperial&appid=54eeff228a31b67218a1e00174849d19')
    .then(response => response.json())
    .then(data => console.log(data))
});