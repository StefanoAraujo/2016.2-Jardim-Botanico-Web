var healingGarden;

var healingGardenCoordinate = {lat: -15.873571, lng: -47.838149};

var healingGardenContentString =
    '<div id="content">'+
    '<div id="siteNotice">'+
    '</div>'+
    '<h1 id="firstHeading" class="firstHeading">Jardim Medicinal</h1>'+
    '<div id="bodyContent">'+
    '<p>O <b>Jardim Medicinal</b>, acompanha o caminho de diversas espécies ' +
    'da flora nativa com uso medicinal, identificadas com '+
    'nomes científicos e populares. '+
    '<p>Leia mais em:  <a href="/jbb_spaces/healing_garden">'+
    'Jardim Medicinal</a> '+
    '</div>'+
    '</div>';

var healingGardenTitle = 'Jardim medicinal';

function addHealingGardenMarker(){
    //create the jbb space
    healingGarden = createJbbSpace(healingGardenCoordinate, healingGardenTitle);

    //set the jbb space on map
    healingGarden.setMap(map);

    //add a listener to open a infowindow every time the jbb space is clicked
    google.maps.event.addListener(healingGarden, 'click', function(clicked_location) {
        addInfowindow(clicked_location.latLng, healingGardenContentString);
    });
}