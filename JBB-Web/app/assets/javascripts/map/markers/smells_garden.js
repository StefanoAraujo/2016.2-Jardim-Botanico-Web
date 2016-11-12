var smellsGarden;

var smellsGardenCoordinate = {lat: -15.875609, lng: -47.837040};

var smellsGardenContentString =
    '<div id="content">'+
    '<div id="siteNotice">'+
    '</div>'+
    '<h1 id="firstHeading" class="firstHeading">Jardim de Cheiros</h1>'+
    '<div id="bodyContent">'+
    '<p>O <b>Jardim de Cheiros</b>, Jardim temático com plantas aromáticas ' +
    'de uso tradicional da cultura popular, culinário e medicinal. '+
    'Seus canteiros formam um desenho com linhas sinuosas ,'+
    'em perfeita harmonia com o ambiente. Proporciona múltiplas intervenções '+
    'pedagógicas em percurso sensorial e a descoberta de sabores cheiros e texturas. '+
    '<p>Leia mais em: <a href="/jbb_spaces/smells_garden"> '+
    'Jardim de Cheiros</a> '+
    '</div>'+
    '</div>';

var smellsGardenTitle = 'Jardim de Cheiros';

function addSmellsGardenMarker(){
    //create the jbb space
    smellsGarden = createJbbSpace(smellsGardenCoordinate, smellsGardenTitle);

    //set the jbb space on map
    smellsGarden.setMap(map);

    //add a listener to open a infowindow every time the jbb space is clicked
    google.maps.event.addListener(smellsGarden, 'click', function(clicked_location) {
        addInfowindow(clicked_location.latLng, smellsGardenContentString);
    });
}