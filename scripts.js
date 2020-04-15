//create name space app
// console.log(lodash)
const spaceApp = {}

//links for api calls
spaceApp.marsUrl = 'https://images-api.nasa.gov/search?media_type=image&q=mars'

spaceApp.venusUrl = 'https://images-api.nasa.gov/search?media_type=image&q=venus'

spaceApp.uranusUrl = 'https://images-api.nasa.gov/search?media_type=image&q=uranus'

spaceApp.saturnUrl = 'https://images-api.nasa.gov/search?media_type=image&q=saturn'

spaceApp.earthUrl = 'https://images-api.nasa.gov/search?media_type=image&q=earth observation'

spaceApp.mercuryUrl = 'https://images-api.nasa.gov/search?media_type=image&q=mercury'

spaceApp.jupiterUrl = 'https://images-api.nasa.gov/search?media_type=image&q=jupiter'

spaceApp.neptuneUrl = 'https://images-api.nasa.gov/search?media_type=image&q=neptune'

spaceApp.plutoUrl = 'https://images-api.nasa.gov/search?media_type=image&q=pluto'

spaceApp.apiKey = '8iRdpFhDSRdRgbOBPn1KDTUQhkZBSCqcXG6cPBhk'

spaceApp.getMars = function () {
    console.log('sending request')
    $.ajax({
        url: spaceApp.marsUrl,
        method: 'GET',
        dataType: 'json',
    }).then(function (result) {
        // console.log(result)
        const keywords = Array.from(result.collection.items);
        const filterKeywords = keywords.map((value) => {
            
            if (value.data[0].keywords.includes('Mars Celebration')) {
                console.log('we dont need them')
            } else {
                console.log(value.data[0].location);
                    $('.display-images').append(`
                    <h2>${value.data[0].description}</h2>
                    <img class='images' src="${value.links[0].href}">
                    `);
                    // value.links[0].href
                }
        })

        const images = Array.from(result.collection.items)
        images.forEach((image) => {
            console.log(image.links[0].href)
        })
    });
};

spaceApp.setUpEventListeners = function (){
    $('#mars').on('click', function (e){
        e.preventDefault();
        spaceApp.getMars();
        console.log("mars!!!");
        // $('.planets').css('display', 'none');

    })
    
}

spaceApp.init = () => {
    spaceApp.setUpEventListeners()

}

$(document).ready(function() { 
    spaceApp.init()
});