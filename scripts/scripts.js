//typed js 
const typed = new Typed('#typed', {
    strings: [
        "Click on a planet",
    ],
    typeSpeed: 30,
    backSpeed: 30,
    backDelay: 700,
    smartBackspace: false,
    loop: false,
    showCursor: false,
});

//create name space app
const spaceApp = {}

//ajax call
spaceApp.getPlanets = function (query) {
    $.ajax({
        url: `https://images-api.nasa.gov/search?media_type=image&q=${query}`,
        method: 'GET',
        dataType: 'json',
        beforeSend: function () {
            //loader will appear as the page loads information from API
            $('#loader').removeClass('hidden')
            //once we have the information loop through it and get images
        }, success: function (result) {
            spaceApp.images = Array.from(result.collection.items)
            spaceApp.images.forEach((image) => {
                //filter out images from 'Mars Celebration'
                if (image.data[0].keywords !== undefined && !image.data[0].keywords.includes('Mars Celebration')) {
                    $('.display-images').append(`
                    <div class="display-container">
                    <h2 class="heading-planets">${image.data[0].title}</h2>
                    <img class='${query}-images images' data-action="zoom" tabIndex="0" src="${image.links[0].href}" alt="${image.data[0].title}">
                    </div>
                `);
                }
            });
        }, complete: function () {
            $('#loader').addClass('hidden')
        }
    });
}



spaceApp.setUpEventListeners = function () {
    $('.planet-container').on('click', function (e) {
        e.preventDefault()
        //getting planet id 
        const planetsId = $(this)[0].id;
        //displaying images matching user input
        spaceApp.getPlanets(planetsId);
        //hiding content once user clicks on planet of choice
        $('.close').css('display', 'inline');
        $('.planets').css('display', 'none');
        $('.type').css('display', 'none')
        $('footer').css('display', 'none')
        //displaying planet name as title once the images from API are displayed
        $('.space-title').css('display', 'none')
        if (planetsId === 'earth observation') {
            $('.space-subheading').append(`Earth`).css('margin-top', '46px')
            $('.space-text').append(`
            Click image to enlarge`).css('padding-bottom', '28px')
        } else {
            $('.space-subheading').append(`${(planetsId)}`).css('margin-top', '46px')
            $('.space-text').append(`
            Click image to enlarge`).css('padding-bottom', '28px');
        }
    });

}

//init
spaceApp.init = () => {
    spaceApp.setUpEventListeners()

}

//document ready
$(document).ready(function() { 
    spaceApp.init()
});