



$(".btn").on("click", showResults);

function showResults() {
    clickDisplay();
    
    showNews();
    // enter currency function here
    getWeather();
}

function clickDisplay() {
    rDisplay = $(".rDisplay");
    rDisplay.removeClass("rDisplay");
}

function showNews() {
    var city = $("input").val();




    var newsAPI = "ab3780e4108e48e2bdecf81068c21a51";
    var newsURL = "https://gnews.io/api/v4/search?q=" + city + "&lang=en" + "&max=5" + "&apikey=" + newsAPI;
    fetch(newsURL).then(function (response) {
        return response.json();
    })
        .then(function (data) {
            console.log(data)

            var events = $(".events");


            events.removeClass("events");

            var titleOne = $(".event-title-1");
            var linkOne = $(".event-link-1");
            var infoOne = $(".event-info-1");

            titleOne.text(data.articles[0].title)
            linkOne.attr('href', data.articles[0].url)
            infoOne.text(data.articles[0].description)

            var titleTwo = $(".event-title-2");
            var linkTwo = $(".event-link-2");
            var infoTwo = $(".event-info-2");

            titleTwo.text(data.articles[1].title)
            infoTwo.text(data.articles[1].description)
            linkTwo.attr('href', data.articles[1].url)

            var titleThree = $(".event-title-3");
            var linkThree = $(".event-link-3");
            var infoThree = $(".event-info-3");

            titleThree.text(data.articles[2].title)
            infoThree.text(data.articles[2].description)
            linkThree.attr('href', data.articles[2].url)

            var titleFour = $(".event-title-4");
            var linkFour = $(".event-link-4");
            var infoFour = $(".event-info-4");

            titleFour.text(data.articles[3].title)
            infoFour.text(data.articles[3].description)
            linkFour.attr('href', data.articles[3].url)

            var titleFive = $(".event-title-5");
            var linkFive = $(".event-link-5");
            var infoFive = $(".event-info-5");

            titleFive.text(data.articles[4].title)
            infoFive.text(data.articles[4].description)
            linkFive.attr('href', data.articles[4].url)


            renderHistory();
            
        })

    


}

// enter currency function here

function getWeather(cityInput) {
    var city = $("input").val() || cityInput
    saveCity()
    var weather = $(".weather");




    var WeatherAPI = "1453cb68cafdfe7161851616395bc88b";
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + WeatherAPI + "&units=" + "imperial";
    fetch(queryURL).then(res => {
        return res.json()
    })
        .then(data => {
            console.log(data)




            weather.removeClass("weather");

            var lat = (data.coord.lat);
            var lon = (data.coord.lon);
            var fiveDay = "https://api.openweathermap.org/data/2.5/forecast?" + "lat=" + lat + "&lon=" + lon + "&appid=" + WeatherAPI + "&units=" + "imperial";

            return fetch(fiveDay).then(res => {
                return res.json()
            })
                .then(data => {
                    console.log(data);

                    var baseDay = dayjs().format('D')
                    var startDay = Number(baseDay);



                    var dayOne = $("#date-1");
                    var iconOne = $("#emoji-1");
                    var iconOneSrc = "http://openweathermap.org/img/wn/" + data.list[3].weather[0].icon + ".png"
                    var tempOne = $("#current-temp-1");
                    var windOne = $("#wind-1");
                    var humidityOne = $("#humidity-1");

                    var dayOneBase = startDay
                    dayOne.text(dayjs().format('M/' + dayOneBase + '/YYYY'));
                    iconOne.text("")
                    iconOne.append('<img src=' + iconOneSrc + '>')
                    tempOne.text(data.list[3].main.temp + "°F")
                    windOne.text(data.list[3].wind.speed + " mph")
                    humidityOne.text(data.list[3].main.humidity + "%")

                    var dayTwo = $("#date-2");
                    var iconTwo = $("#emoji-2");
                    var iconTwoSrc = "http://openweathermap.org/img/wn/" + data.list[11].weather[0].icon + ".png"
                    var tempTwo = $("#current-temp-2");
                    var windTwo = $("#wind-2");
                    var humidityTwo = $("#humidity-2");

                    var dayTwoBase = dayOneBase + 1
                    dayTwo.text(dayjs().format('M/' + dayTwoBase + '/YYYY'));
                    iconTwo.text("")
                    iconTwo.append('<img src=' + iconTwoSrc + '>')
                    tempTwo.text(data.list[11].main.temp + "°F")
                    windTwo.text(data.list[11].wind.speed + " mph")
                    humidityTwo.text(data.list[11].main.humidity + "%")

                    var dayThree = $("#date-3");
                    var iconThree = $("#emoji-3");
                    var iconThreeSrc = "http://openweathermap.org/img/wn/" + data.list[19].weather[0].icon + ".png"
                    var tempThree = $("#current-temp-3");
                    var windThree = $("#wind-3");
                    var humidityThree = $("#humidity-3");

                    var dayThreeBase = dayTwoBase + 1
                    dayThree.text(dayjs().format('M/' + dayThreeBase + '/YYYY'));
                    iconThree.text("")
                    iconThree.append('<img src=' + iconThreeSrc + '>')
                    tempThree.text(data.list[19].main.temp + "°F")
                    windThree.text(data.list[19].wind.speed + " mph")
                    humidityThree.text(data.list[19].main.humidity + "%")

                    var dayFour = $("#date-4");
                    var iconFour = $("#emoji-4");
                    var iconFourSrc = "http://openweathermap.org/img/wn/" + data.list[27].weather[0].icon + ".png"
                    var tempFour = $("#current-temp-4");
                    var windFour = $("#wind-4");
                    var humidityFour = $("#humidity-4");

                    var dayFourBase = dayThreeBase + 1
                    dayFour.text(dayjs().format('M/' + dayFourBase + '/YYYY'));
                    iconFour.text("")
                    iconFour.append('<img src=' + iconFourSrc + '>')
                    tempFour.text(data.list[27].main.temp + "°F")
                    windFour.text(data.list[27].wind.speed + " mph")
                    humidityFour.text(data.list[27].main.humidity + "%")

                    var dayFive = $("#date-5");
                    var iconFive = $("#emoji-5");
                    var iconFiveSrc = "http://openweathermap.org/img/wn/" + data.list[35].weather[0].icon + ".png"
                    var tempFive = $("#current-temp-5");
                    var windFive = $("#wind-5");
                    var humidityFive = $("#humidity-5");

                    var dayFiveBase = dayFourBase + 1
                    dayFive.text(dayjs().format('M/' + dayFiveBase + '/YYYY'));
                    iconFive.text("")
                    iconFive.append('<img src=' + iconFiveSrc + '>')
                    tempFive.text(data.list[35].main.temp + "°F")
                    windFive.text(data.list[35].wind.speed + " mph")
                    humidityFive.text(data.list[35].main.humidity + "%")


                    
                })

        })
        .catch(error => console.log('ERROR'))
}


function saveCity() {
    var searchHistory = JSON.parse(localStorage.getItem("recent")) || []
    searchHistory.push($("input").val())
    localStorage.setItem("recent", JSON.stringify(searchHistory))
}

function historySearch() {
    console.log(this.dataset.city)
    showNews(this.dataset.city)
    getWeather(this.dataset.city)
}

function renderHistory() {
    var favorites = $(".favorites");
    var history = JSON.parse(localStorage.getItem("recent")) || []
    for (i = 0; i < history.length; i++) {
        var recentSearch = document.createElement('button');
        recentSearch.classList.add('fav-btn')
        recentSearch.setAttribute('data-city', history[i])
        
        
        if(recentSearch.textContent = history[i]) {
            favorites.append(recentSearch);
            recentSearch.addEventListener("click", historySearch)
        }
    }
}

renderHistory();

