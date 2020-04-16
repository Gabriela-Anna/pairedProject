//create name space app
// console.log(lodash)
const spaceApp = {}


spaceApp.apiKey = '8iRdpFhDSRdRgbOBPn1KDTUQhkZBSCqcXG6cPBhk'


spaceApp.getPlanets = function (query) {
    console.log('sending request')
    $.ajax({
        url: `https://images-api.nasa.gov/search?media_type=image&q=${query}`,
        method: 'GET',
        dataType: 'json',
    }).then(function (result) {
        console.log(result)
        spaceApp.images = Array.from(result.collection.items)
        spaceApp.images.forEach((image) => {
            if (!image.data[0].keywords.includes('Mars Celebration')) {
                // do the displaying stuff in here 
                console.log(image.links[0].href);
                $('.display-images').append(`
                    <div>
                    <h2 class="heading-planets">${image.data[0].description}</h2>
                    <img class='${query}-images' src="${image.links[0].href}" alt="${query}">
                    </div>
                    `);
            }
        });
    });
}

spaceApp.setUpEventListeners = function () {
        $('.planet-container').on('click', function (e) {
            e.preventDefault()
            const planetsId = $(this)[0].id;
            spaceApp.getPlanets(planetsId)
    });
}



spaceApp.init = () => {
    spaceApp.setUpEventListeners()

}

$(document).ready(function() { 
    spaceApp.init()
});