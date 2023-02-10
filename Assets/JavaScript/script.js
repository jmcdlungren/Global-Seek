// // selecting each element from the html doc
// const search_btn = document.querySelector('.btn');
// const city_input =document.querySelector('#city-input'); // from the user entering the city name
// const population_display = document.querySelector('#population-display');
// const weather_events = document.querySelector('.events');
// const weather_currency = document.querySelector('.currency');
// const weather_temp = document.querySelector('weather');
// const favorites = document.querySelector('.favorites');

// // will need to create additional elements on the html doc for the "city_input" and "population-display"

 

// // api focuses on getting global city and region data
// // event listener to generate results from the data
// search_btn.addEventListener('click', function(){
//     fetch("https://wft-geo-db.p.rapidapi.com/v1")
//     .then(response => response.json())
//     .then(data => {
//         console.log(data);
//     })
// })

// //  function created to allow the user to type in the city name to the input field  instead of selecting from list
// search_btn.addEventListener('click', function(){
//     const entered_city_name = city_input.value;
//     const selected_city = US_CITIES.find(city => city.name.toLowerCase() === entered_city_name.toLowerCase());
//     console.log(`Selected city: ${selected_city.name}`);

//     fetch(`https://wft-geo-db.p.rapidapi.com/v1/geo/cities/${selected_city.code}`)
//     .then(response => response.json())
//     .then(data => {
//         console.log(data);
//         population_display.textContent = `Population of ${selected_city.name}: ${data.population}`
//     });
// });









$(".btn").on("click", showNews); 

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

        })


            
              
    }





            //     // set up `<div>` to hold result content
            //     var resultCard = document.createElement('div');
            //     resultCard.classList.add('card', 'bg-light', 'text-dark', 'mb-3', 'p-3');
              
            //     var resultBody = document.createElement('div');
            //     resultBody.classList.add('card-body');
            //     resultCard.append(resultBody);
              
            //     var titleEl = document.createElement('h3');
            //     titleEl.textContent = resultObj.title;
              
            //     var bodyContentEl = document.createElement('p');
            //     bodyContentEl.innerHTML =
            //       '<strong>Date:</strong> ' + resultObj.date + '<br/>';
              
            //     if (resultObj.subject) {
            //       bodyContentEl.innerHTML +=
            //         '<strong>Subjects:</strong> ' + resultObj.subject.join(', ') + '<br/>';
            //     } else {
            //       bodyContentEl.innerHTML +=
            //         '<strong>Subjects:</strong> No subject for this entry.';
            //     }
              
            //     if (resultObj.description) {
            //       bodyContentEl.innerHTML +=
            //         '<strong>Description:</strong> ' + resultObj.description[0];
            //     } else {
            //       bodyContentEl.innerHTML +=
            //         '<strong>Description:</strong>  No description for this entry.';
            //     }
              
            //     var linkButtonEl = document.createElement('a');
            //     linkButtonEl.textContent = 'Read More';
            //     linkButtonEl.setAttribute('href', resultObj.url);
            //     linkButtonEl.classList.add('btn', 'btn-dark');
              
            //     resultBody.append(titleEl, bodyContentEl, linkButtonEl);
              
            //     resultContentEl.append(resultCard);




            
              
            //     fetch(locQueryUrl)
            //       .then(function (response) {
            //         if (!response.ok) {
            //           throw response.json();
            //         }
              
            //         return response.json();
            //       })
            //       .then(function (locRes) {
            //         // write query to page so user knows what they are viewing
            //         resultTextEl.textContent = locRes.search.query;
              
            //         console.log(locRes);
              
            //         if (!locRes.results.length) {
            //           console.log('No results found!');
            //           resultContentEl.innerHTML = '<h3>No results found, search again!</h3>';
            //         } else {
            //           resultContentEl.textContent = '';
            //           for (var i = 0; i < locRes.results.length; i++) {
            //             printResults(locRes.results[i]);
            //           }
            //         }
            //       })
            //       .catch(function (error) {
            //         console.error(error);
            //       });
            //   }







    //         var cityName = $("#city-name");
    //         var currentTemp = $("#current-temp");
    //         var wind = $("#wind");
    //         var humidity = $("#humidity");
    //         var today = dayjs().format('M/D/YYYY');

    //         oneDay.removeClass("d-none");

    //         cityName.text(data.name + " (" + today + ")") 
    //         currentTemp.text(data.main.temp + "°F")
    //         wind.text(data.wind.speed + " mph")
    //         humidity.text(data.main.humidity + "%")

    //         var lat = (data.coord.lat);
    //         var lon = (data.coord.lon);
    //         var fiveDay = "https://api.openweathermap.org/data/2.5/forecast?" + "lat=" + lat + "&lon=" + lon + "&appid=" + WeatherAPI + "&units=" + "imperial";

    //         return fetch(fiveDay).then(res => {
    //             return res.json()
    //         })
    //             .then(data => {
    //                 console.log(data);
    //             })

    //     })
    //     .catch(error => console.log('ERROR'))
    
        


  
    

    // var memory = $(".memory");
    // var recentSearch = document.createElement('button');
    // memory.append(recentSearch);

    // localStorage.setItem("recent", city);
    // var recent = localStorage.getItem("recent")
    // recentSearch.textContent = recent;



