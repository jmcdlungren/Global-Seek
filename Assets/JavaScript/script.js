// selecting each element from the html doc
const search_btn = document.querySelector('.btn');
const city_input =document.querySelector('#city-input'); // from the user entering the city name
const population_display = document.querySelector('#population-display');
const weather_events = document.querySelector('.events');
const weather_currency = document.querySelector('.currency');
const weather_temp = document.querySelector('weather');
const favorites = document.querySelector('.favorites');

// will need to create additional elements on the html doc for the "city_input" and "population-display"

 

// api focuses on getting global city and region data
// event listener to generate results from the data
search_btn.addEventListener('click', function(){
    fetch("https://wft-geo-db.p.rapidapi.com/v1")
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
})

//  function created to allow the user to type in the city name to the input field  instead of selecting from list
search_btn.addEventListener('click', function(){
    const entered_city_name = city_input.value;
    const selected_city = US_CITIES.find(city => city.name.toLowerCase() === entered_city_name.toLowerCase());
    console.log(`Selected city: ${selected_city.name}`);

    fetch(`https://wft-geo-db.p.rapidapi.com/v1/geo/cities/${selected_city.code}`)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        population_display.textContent = `Population of ${selected_city.name}: ${data.population}`
    });
});