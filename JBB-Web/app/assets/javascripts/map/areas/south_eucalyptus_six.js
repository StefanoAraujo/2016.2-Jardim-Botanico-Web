var southEucalyptusSixPolygon;
function addSouthEucalyptusSixPolygon(){
  var southEucalyptusSixPolygonCoords = [
{lat: -15.871122909825797, lng: -47.842594385147095},
{lat: -15.871226108248594, lng: -47.842369079589844},
{lat: -15.871411865276427, lng: -47.8418755531311},
{lat: -15.871628581592493, lng: -47.84193992614746},
{lat: -15.871773059007067, lng: -47.842057943344116},
{lat: -15.871525383375822, lng: -47.84274458885193},
{lat: -15.871391225615124, lng: -47.84272313117981},
{lat: -15.871267387602904, lng: -47.84263730049133},
{lat: -15.871205468568258, lng: -47.842583656311035},
  ];

  // Construct the polygon.
  southEucalyptusSixPolygon = new google.maps.Polygon({
    paths: southEucalyptusSixPolygonCoords,
    strokeColor: '#A1BF77',
    strokeOpacity: 0.1,
    strokeWeight: 3,
    fillColor: '#A1BF77',
    fillOpacity: 0.50
  });
  
  southEucalyptusSixPolygon.setMap(map);
}