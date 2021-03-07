var button = document.querySelector('.searchBtn')
var inputValue = document.querySelector('.inputValue')
var name = document.querySelector('.name');
var date = document.querySelector('.date');
var weather = document.querySelector('.weather-conditions');
var temp = document.querySelector('.temp');
var humidity = document.querySelector('.humidity');
var wind = document.querySelector('.wind-speed');
var index = document.querySelector('.uv-index');
var citySearch = document.querySelector('#city-search');

button.addEventListener('click', function () {
    event.preventDefault()
    fetch('https://api.openweathermap.org/data/2.5/forecast?q=' + inputValue.value + '&cnt=5&units=imperial&appid=54eeff228a31b67218a1e00174849d19')
        .then(response => response.json())
        .then(data => {
            var nameValue = data['city']['name'];
            // var weatherValue = data['list']['0']['weather']['0']['description'];
            var tempValue = data['list']['0']['main']['temp'];
            var humidityValue = data['list']['0']['main']['humidity'];
            // var windValue = data['list']['0']['wind']['speed'];
            document.querySelector('.name').innerHTML = nameValue;
            // document.querySelector('.weather').innerHTML = weatherValue;
            document.querySelector('.temp').innerHTML = tempValue;
            document.querySelector('.humidity').innerHTML = humidityValue;
            // document.querySelector('.wind').innerHTML = windValue;

        })
});

// button.addEventListener('click',function () {
//     inputValue = inputCity.val()
//     history.push(inputCity);
//     localStorage.setItem('inputCity', JSON.stringify(history));
//     buildContent();

//     // var = [" "]
// });

let userSearch;
let cityList;

const itemArr = JSON.parse(localStorage.getItem('inputValue')) || [];

button.addEventListener('click', function () {
    event.preventDefault();
    userSearch = inputValue.value;
    itemArr.push(userSearch);
    localStorage.setItem('inputValue', JSON.stringify(itemArr));
    itemArr.forEach(search => {
        cityList = document.createElement('div');
        citySearch.appendChild(cityList);
        let cityText = document.createElement('p');
        cityText.innerHTML=citySearch;
        cityList.className="city-list";
        cityList.appendChild(cityText);
        button.addEventListener('click', function () {
        cityList.remove();
        })
    })
});
button.addEventListener('click', function() {
    inputValue.innerHTML = '';
});


