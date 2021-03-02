var fetchButton = document.getElementById('searchBtn');

function getApi() {
    var requestUrl = 'https://api.openweathermap.org/data/2.5/forecast?q={city name}&appid={API key}';

    fetch(requestUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            for (var i = 0; i < data.length; i++) {
                var listItem = document.createElement('li');
                listItem.textContent = data[i].html_url;
                repoList.appendChild(listItem);
            }
        });
}
fetchButton.addEventListener('click', getApi);