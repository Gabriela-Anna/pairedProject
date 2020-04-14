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
        const keywords = Array.from(result.collection.items);
        const filterKeywords = keywords.map((value)=>{
            if (value.data[0].keywords[1] !== 'Mars Celebration') {
                return console.log(value.data[0].keywords[1])
    }
        })



        keywords.forEach((keyword) => {
            // console.log(keyword.data[0].keywords)

        })

        // console.log(result.collection.items)


        const images = Array.from(result.collection.items)
        images.forEach((image)=>{

            // console.log(image.links[0].href)
        })
        // console.log(result)
        // result.forEach((res) => {
        //     console.log(res)  
            
        // });
        // console.log(result.collection.items[0].links[0].href)
        // $('#mars').append(`<img src="${image}">`)
    });
};

spaceApp.setUpEventListeners = function (){
        $('#mars').on('click', function (e){
            e.preventDefault()
            spaceApp.getMars()
            console.log("mars!!!")
        })
    
}


spaceApp.init = () => {
    spaceApp.setUpEventListeners()

}

$(document).ready(function() { 
    spaceApp.init()
  });