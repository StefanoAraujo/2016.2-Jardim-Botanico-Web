var pinusEvolutionGardemPolygon;
function addPinusEvolutionGardemPolygon(){
  var pinusEvolutionGardemPolygonCoords = [
  {lat: -15.872732799202867, lng: -47.83627510070801},
  {lat: -15.872722479440124, lng: -47.83642530441284},
  {lat: -15.872939194346685, lng: -47.83644676208496},
  {lat: -15.873300385339657, lng: -47.83647894859314},
  {lat: -15.873589337667873, lng: -47.836607694625854},
  {lat: -15.873661575685173, lng: -47.8370475769043},
  {lat: -15.873682215113925, lng: -47.83717632293701},
  {lat: -15.874167241081153, lng: -47.837079763412476},
  {lat: -15.874559388881885, lng: -47.83696174621582},
  {lat: -15.875126969873198, lng: -47.83677935600281},
  {lat: -15.875364321449979, lng: -47.83670425415039},
  {lat: -15.875952539369816, lng: -47.836564779281616},
  {lat: -15.87637564242563, lng: -47.83640384674072},
  {lat: -15.876654270781975, lng: -47.836328744888306},
  {lat: -15.876571714272123, lng: -47.83580303192139},
  {lat: -15.876447879443903, lng: -47.83527731895447},
  {lat: -15.875942219771991, lng: -47.8354275226593},
  {lat: -15.875519115805925, lng: -47.83552408218384},
  {lat: -15.875106330592443, lng: -47.83568501472473},
  {lat: -15.874672905208056, lng: -47.835835218429565},
  {lat: -15.874425233141194, lng: -47.835835218429565},
  {lat: -15.873950527495413, lng: -47.83595323562622},
  {lat: -15.873609977104032, lng: -47.83601760864258},
  ];
    // Construct the polygon.
    pinusEvolutionGardemPolygon = new google.maps.Polygon({
      paths: pinusEvolutionGardemPolygonCoords,
      strokeColor: '#BAE3A9',
      strokeOpacity: 0.1,
      strokeWeight: 3,
      fillColor: '#BAE3A9',
      fillOpacity: 0.50
    });
    
    pinusEvolutionGardemPolygon.setMap(map);
}