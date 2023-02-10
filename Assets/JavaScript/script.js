



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





