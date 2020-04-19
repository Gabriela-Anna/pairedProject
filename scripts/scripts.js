//create name space app
const spaceApp = {}


//ajax call
spaceApp.getPlanets = function (query) {
    $.ajax({
        url: `https://images-api.nasa.gov/search?media_type=image&q=${query}`,
        method: 'GET',
        dataType: 'json',
        beforeSend: function(){
            $('#loader').removeClass('hidden')
        }, success: function(result){
        spaceApp.images = Array.from(result.collection.items)
        spaceApp.images.forEach((image) => {
            //displaying planets matching user input
            if (!image.data[0].keywords.includes('Mars Celebration')) {
                $('.display-images').append(`
                    <div class="display-container">
                    <h2 class="heading-planets">${image.data[0].title}</h2>
                    <img class='${query}-images images' src="${image.links[0].href}" alt="${query}" data-action="zoom">
                    </div>
                `);
            }
        });
    }, complete: function(){
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
        $('.space-title').css('display', 'none')
        if (planetsId === 'earth observation') {
            $('.space-subheading').append(`<h2 class="space-subheading">Earth</h2>`).css('height', '20vh').css('text-transform', "capitalize")
        } else {
            $('.space-subheading').append(`${(planetsId)}`).css('height', '20vh').css('text-transform', "capitalize")
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