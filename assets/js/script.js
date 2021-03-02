// var fetchButton = document.getElementById('searchBtn');

// function getApi() {
//     var requestUrl = 'http://api.openweathermap.org/data/2.5/forecast?id=54eeff228a31b67218a1e00174849d19={API key}';

//     fetch(requestUrl)
//         .then(function (response) {
//             return response.json();
//         })
//         .then(function (data) {
//             for (var i = 0; i < data.length; i++) {
//                 var listItem = document.createElement('li');
//                 listItem.textContent = data[i].html_url;
//                 repoList.appendChild(listItem);
//             }
//         });
// }
// fetchButton.addEventListener('click', getApi);

fetch('https://api.openweathermap.org/data/2.5/forecast?q={city name}&appid={54eeff228a31b67218a1e00174849d19}')
.then(response => response.json())
.then(data => console.log(data));