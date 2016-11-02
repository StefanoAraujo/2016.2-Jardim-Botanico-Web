var southEucalyptusEightPolygon;
function addSouthEucalyptusEightPolygon(){
  var southEucalyptusEightPolygonCoords = [
{lat: -15.872959833849432, lng: -47.843077182769775},
{lat: -15.87313526953749, lng: -47.84245491027832},
{lat: -15.87317654850072, lng: -47.84219741821289},
{lat: -15.873444861555557, lng: -47.84227252006531},
{lat: -15.873589337667873, lng: -47.84239053726196},
{lat: -15.873795731934317, lng: -47.842615842819214},
{lat: -15.873661575685173, lng: -47.84276604652405},
{lat: -15.873413902375157, lng: -47.84325957298279},
{lat: -15.87313526953749, lng: -47.84318447113037},
];

  // Construct the polygon.
  southEucalyptusEightPolygon = new google.maps.Polygon({
    paths: southEucalyptusEightPolygonCoords,
    strokeColor: '#A1BF77',
    strokeOpacity: 0.1,
    strokeWeight: 3,
    fillColor: '#A1BF77',
    fillOpacity: 0.50
  });
  
  southEucalyptusEightPolygon.setMap(map);
}