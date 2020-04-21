const typed = new Typed('#typed', {
    strings: [
        "Click on a planet",
    ],
    typeSpeed: 30,
    backSpeed: 30,
    backDelay: 700,
    smartBackspace: false, // Default value
    loop: false,
    showCursor: false
});

//create name space app
const spaceApp = {}

spaceApp.getPlanets = function (query) {
    $.ajax({
        url: `https://images-api.nasa.gov/search?media_type=image&q=${query}`,
        method: 'GET',
        dataType: 'json',
        beforeSend: function () {
            $('#loader').removeClass('hidden')
        }, success: function (result) {
            spaceApp.images = Array.from(result.collection.items)
            spaceApp.images.forEach((image) => {
                //displaying planets matching user input
                if (!image?.data[0]?.keywords?.includes('Mars Celebration')) {
                    $('.display-images').append(`
                    <div class="display-container">
                    <h2 class="heading-planets">${image.data[0].title}</h2>
                    <img class='${query}-images images' src="${image.links[0].href}" alt="${query}" data-action="zoom">
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
        const planetsId = $(this)[0].id;
        spaceApp.getPlanets(planetsId);
        $('.close').css('display', 'inline');
        $('.planets').css('display', 'none');
        $('.type').css('display', 'none')
        $('footer').css('display', 'none')
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