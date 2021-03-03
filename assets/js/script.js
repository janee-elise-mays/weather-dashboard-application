var searchInput = document.getElementById('searchBtn');

searchInput.addEventListener('click', function(event){
    if(event.click == 'click'){
        addItem();
    }
})

function addItem(){
    var city = document.getElementById('search-input').value;
    var h1 = document.createElement('h1');

    document.getElementById('search-input').value = '';
    h1.appendChild(document.createTextNode(city));

    var div = document.getElementById('city-searches');
    div.insertAdjacentElement("beforeend", h1);
}
// var fetchButton = document.getElementById('searchBtn'); 
function getApi() {
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
    // $('#searchBtn').click(function(){
    //     var input = $(this).parent().attr('search-input');
    //     var city = $(this).prev().val();
    //     localStorage.setItem(input, city);
    // })
    
    
    // console.log(fetchButton)
    // fetchButton.addEventListener('click', function(event){
    //     event.preventDefault()
    //     fetch('http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=54eeff228a31b67218a1e00174849d19')
    //     .then(response => response.json())
    //     .then(data => console.log(data));
    // });
