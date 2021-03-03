var fetchButton = document.getElementById('searchBtn');
var searchInput = document.querySelector('.search-input');
// function getApi() {
//     var requestUrl = 'http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=54eeff228a31b67218a1e00174849d19';

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
console.log(fetchButton)
fetchButton.addEventListener('click', function(event){
    event.preventDefault()
    fetch('http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=54eeff228a31b67218a1e00174849d19')
    .then(response => response.json())
    .then(data => console.log(data));
});

