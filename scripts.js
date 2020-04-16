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

spaceApp.galaxiesUrl = 'https://images-api.nasa.gov/search?media_type=image&q=galaxies'

spaceApp.moonUrl = 'https://images-api.nasa.gov/search?media_type=image&q=moon'

spaceApp.apiKey = '8iRdpFhDSRdRgbOBPn1KDTUQhkZBSCqcXG6cPBhk'

spaceApp.getEarth = function () {
    console.log('sending request')
    $.ajax({
        url: spaceApp.earthUrl,
        method: 'GET',
        dataType: 'json',
    }).then(function (result) {
        console.log(result)

        spaceApp.images = Array.from(result.collection.items)
        spaceApp.images.forEach((image) => {

            console.log(image.links[0].href);
            $('.display-images').append(`
                    <div>
                    <h2 class="heading-planets">${image.data[0].description}</h2>
                    <img class='urunus-images' src="${image.links[0].href}">
                    </div>
                    `);
        })
    });
};

spaceApp.getJupiter = function () {
    console.log('sending request')
    $.ajax({
        url: spaceApp.jupiterUrl,
        method: 'GET',
        dataType: 'json',
    }).then(function (result) {
        console.log(result)

        spaceApp.images = Array.from(result.collection.items)
        spaceApp.images.forEach((image) => {

            console.log(image.links[0].href);
            $('.display-images').append(`
                    <div>
                    <h2 class="heading-planets">${image.data[0].description}</h2>
                    <img class='urunus-images' src="${image.links[0].href}">
                    </div>
                    `);
        })
    });
};

spaceApp.getNeptune = function () {
    console.log('sending request')
    $.ajax({
        url: spaceApp.neptuneUrl,
        method: 'GET',
        dataType: 'json',
    }).then(function (result) {
        console.log(result)

        spaceApp.images = Array.from(result.collection.items)
        spaceApp.images.forEach((image) => {

            console.log(image.links[0].href);
            $('.display-images').append(`
                    <div>
                    <h2 class="heading-planets">${image.data[0].description}</h2>
                    <img class='urunus-images' src="${image.links[0].href}">
                    </div>
                    `);
        })
    });
};

spaceApp.getSaturn = function () {
    console.log('sending request')
    $.ajax({
        url: spaceApp.saturnUrl,
        method: 'GET',
        dataType: 'json',
    }).then(function (result) {
        console.log(result)

        spaceApp.images = Array.from(result.collection.items)
        spaceApp.images.forEach((image) => {

            console.log(image.links[0].href);
            $('.display-images').append(`
                    <div>
                    <h2 class="heading-planets">${image.data[0].description}</h2>
                    <img class='urunus-images' src="${image.links[0].href}">
                    </div>
                    `);
        })
    });
};

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
                    <div>
                    <h2 class="heading-planets">${value.data[0].description}</h2>
                    <img class='mars-images' src="${value.links[0].href}">
                    </div>
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

spaceApp.getUranus = function () {
    console.log('sending request')
    $.ajax({
        url: spaceApp.uranusUrl,
        method: 'GET',
        dataType: 'json',
    }).then(function (result) {
        console.log(result)

        spaceApp.images = Array.from(result.collection.items)
        spaceApp.images.forEach((image) => {
            
            console.log(image.links[0].href);
            $('.display-images').append(`
                    <div>
                    <h2 class="heading-planets">${image.data[0].description}</h2>
                    <img class='urunus-images' src="${image.links[0].href}">
                    </div>
                    `);
        })
    });
};

spaceApp.getMercury = function () {
    console.log('sending request')
    $.ajax({
        url: spaceApp.mercuryUrl,
        method: 'GET',
        dataType: 'json',
    }).then(function (result) {
        console.log(result)

        spaceApp.images = Array.from(result.collection.items)
        spaceApp.images.forEach((image) => {

            console.log(image.links[0].href);
            $('.display-images').append(`
                    <div>
                    <h2 class="heading-planets">${image.data[0].description}</h2>
                    <img class='mercury-images' src="${image.links[0].href}">
                    </div>
                    `);
        })
    });
};

spaceApp.getVenus = function () {
    console.log('sending request')
    $.ajax({
        url: spaceApp.venusUrl,
        method: 'GET',
        dataType: 'json',
    }).then(function (result) {
        console.log(result)

        spaceApp.images = Array.from(result.collection.items)
        spaceApp.images.forEach((image) => {

            console.log(image.links[0].href);
            $('.display-images').append(`
                    <div>
                    <h2 class="heading-planets">${image.data[0].description}</h2>
                    <img class='venus-images' src="${image.links[0].href}">
                    </div>
                    `);
        })
    });
};

spaceApp.getMoon = function () {
    console.log('sending request')
    $.ajax({
        url: spaceApp.moonUrl,
        method: 'GET',
        dataType: 'json',
    }).then(function (result) {
        console.log(result)

        spaceApp.images = Array.from(result.collection.items)
        spaceApp.images.forEach((image) => {

            console.log(image.links[0].href);
            $('.display-images').append(`
                    <div>
                    <h2 class="heading-planets">${image.data[0].description}</h2>
                    <img class='urunus-images' src="${image.links[0].href}">
                    </div>
                    `);
        })
    });
};

spaceApp.getGalaxies = function () {
    console.log('sending request')
    $.ajax({
        url: spaceApp.galaxiesUrl,
        method: 'GET',
        dataType: 'json',
    }).then(function (result) {
        console.log(result)

        spaceApp.images = Array.from(result.collection.items)
        spaceApp.images.forEach((image) => {

            console.log(image.links[0].href);
            $('.display-images').append(`
                    <div>
                    <h2 class="heading-planets">${image.data[0].description}</h2>
                    <img class='urunus-images' src="${image.links[0].href}">
                    </div>
                    `);
        })
    });
};

spaceApp.setUpEventListeners = function (){
    $('#earth').on('click', function (e) {
        e.preventDefault();
        spaceApp.getEarth();
        console.log("earth!!!");
        // $('.planets').css('display', 'none');
    });

    $('#jupiter').on('click', function (e) {
        e.preventDefault();
        spaceApp.getJupiter();
        console.log("jupiter!!!");
        // $('.planets').css('display', 'none');
    });

    $('#neptune').on('click', function (e) {
        e.preventDefault();
        spaceApp.getNeptune();
        console.log("neptune!!!");
        // $('.planets').css('display', 'none');
    });

    $('#mars').on('click', function (e){
        e.preventDefault();
        spaceApp.getMars();
        console.log("mars!!!");
        // $('.planets').css('display', 'none');
    });

    $('#uranus').on('click', function (e) {
        e.preventDefault();
        spaceApp.getUranus();
        console.log("uranus!!!");
        // $('.planets').css('display', 'none');
    });

    $('#mercury').on('click', function (e) {
        e.preventDefault();
        spaceApp.getMercury();
        console.log("mercury!!!");
        // $('.planets').css('display', 'none');
    });

    $('#venus').on('click', function (e) {
        e.preventDefault();
        spaceApp.getVenus();
        console.log("venus!!!");
        // $('.planets').css('display', 'none');
    });

    $('#saturn').on('click', function (e) {
        e.preventDefault();
        spaceApp.getSaturn();
        console.log("saturn!!!");
        // $('.planets').css('display', 'none');
    });

    $('#moon').on('click', function (e) {
        e.preventDefault();
        spaceApp.getMoon();
        console.log("moon!!!");
        // $('.planets').css('display', 'none');
    });

    $('#galaxies').on('click', function (e) {
        e.preventDefault();
        spaceApp.getGalaxies();
        $('.display-images').empty()
        console.log("galaxies!!!");
        $('.planets').css('display', 'none');
    });
}

spaceApp.init = () => {
    spaceApp.setUpEventListeners()

}

$(document).ready(function() { 
    spaceApp.init()
});