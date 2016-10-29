$(window).load(function() {
    loadScript();
});

var map;
var infowindow;
var rivers_on = false;
var markers_on  = false;

function initialize() {
    var mapOptions = {
        // center: new google.maps.LatLng(37.783, -122.403),
        center: new google.maps.LatLng(-15.872652, -47.836588),
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.NORMAL,
        panControl: true,
        scaleControl: false,
        streetViewControl: true,
        overviewMapControl: true
    };

    // initializing map
    map = new google.maps.Map(document.getElementById("map-canvas"),mapOptions);
    infowindow = new google.maps.InfoWindow();
    addJbbVisitantsAreaPolygon();
    addJbbEcologicalStationPolygon();
}

function setJbbRivers() {
    if(rivers_on) {
        taperaRiver.setMap(null);
        redentorCristRiver.setMap(null);
        redentorCristRiverArm.setMap(null);
        cochoRiver.setMap(null);
        taperaRiverArm.setMap(null);
        taperaRiverArm2.setMap(null);
        deerHeadRiver.setMap(null);
        caesb1River.setMap(null);
        caesb2River.setMap(null);
        caesb3River.setMap(null);
        caesb4River.setMap(null);
        deerHeadRiverArm.setMap(null);
        deerHeadRiverArm2.setMap(null);
        deerHeadRiverArm3.setMap(null);

        infowindow.close();
        rivers_on = false;
    }
    else {
        addTaperaRiver();
        addRedentorCristRiver();
        addRedentorCristRiverArm();
        addCochoRiver();
        addTaperaRiverArm();
        addTaperaRiverArm2();
        addDeerHeadRiver();
        addCaesb1River();
        addCaesb2River();
        addCaesb3River();
        addCaesb4River();
        addDeerHeadRiverArm();
        addDeerHeadRiverArm2();
        addDeerHeadRiverArm3();

        rivers_on = true;
    }

var vegetation_on = false;

function setVegetation() {
  if(vegetation_on) {
    visitantsCenterAdministrativeAreaPolygon.setMap(null);
    dryForestPolygon.setMap(null);
    nurseryPolygon.setMap(null);
    cleanCampPolygon.setMap(null);
    urbanAreaPolygon.setMap(null);
    administrateAreaEvolutionGardemPolygon.setMap(null);
    anthropicAreaPolygon.setMap(null);
    anthropicAreaAdministratePolygon.setMap(null);
    anthropicAreaEvolutionGardemPolygon.setMap(null);
    denseCerradoPolygon.setMap(null);
    smallDenseCerradoPolygon.setMap(null);
    pinusEvolutionGardemPolygon.setMap(null);
    pinusAdministrateAreaPolygon.setMap(null);
    pinusUrbanAreaPolygon.setMap(null);
    smallPinusPolygon.setMap(null);
    eucalyptusTypicalCerradoPolygon.setMap(null);
    dirtyFieldTypicalCerradoPolygon.setMap(null);
    typicalCerradoDryForestPolygon.setMap(null);
    typicalCerradoCleanCampPolygon.setMap(null);
    eucalyptusTypicalCerradPolygonoPolygon.setMap(null);
    southAnthropicAreaPolygon.setMap(null);
    southBypassAreaPolygon.setMap(null);
    southDirtyFieldAreaPolygon.setMap(null);
    southDirtyFieldPolygon.setMap(null);
    southLeftBypassAreaPolygon.setMap(null);
    southCenterBypassAreaPolygon.setMap(null);
    southRupestresAreaTopPolygon.setMap(null);
    southCleanCampPolygon.setMap(null);
    southPathPolygon.setMap(null);
    southEucalyptusOnePolygon.setMap(null);
    southEucalyptusTwoPolygon.setMap(null);
    southEucalyptusThreePolygon.setMap(null);
    southEucalyptusFourPolygon.setMap(null);
    southEucalyptusFivePolygon.setMap(null);
    southEucalyptusSixPolygon.setMap(null);
    southEucalyptusSevenPolygon.setMap(null);
    southEucalyptusEightPolygon.setMap(null);
    southEucalyptusNinePolygon.setMap(null);
    southEucalyptusTenPolygon.setMap(null);
    southEucalyptusElevenPolygon.setMap(null);
    southGalleryBushPolygon.setMap(null);
    southTypicalCerradoArea.setMap(null);
    drainCerradoSouthPolygon.setMap(null);
    smallDrainCerradoPolygon.setMap(null);
    smallRockCerradoPolygon.setMap(null);
    centerThickAreaPolygon.setMap(null);
    centerTypicalCerradoAreaPolygon.setMap(null);
    centerBypassAreaRightPolygon.setMap(null);
    centerBypassAreaLeftPolygon.setMap(null);
    centerCerradoSparseAreaRightPolygon.setMap(null);
    centerCerradoSparseAreaLeftPolygon.setMap(null);
    centerCerradoSparseAreaRightUpPolygon.setMap(null);
    centerBypassAreaUpPolygon.setMap(null);
    centerGroundAreaRightPolygon.setMap(null);
    centerForestGaleriaAreaPolygon.setMap(null);
    centerGroundMurundunsAreaPolygon.setMap(null);
    centerGalleryBushPolygon.setMap(null);
    smallTypicalCerradoAreaPolygon.setMap(null);
    centerBypassAreaCenterPolygon.setMap(null);
    centerGroundMurundunsAreaCenterPolygon.setMap(null);
    centerCerradoSparseAreaPolygon.setMap(null);
    centerGroundMurundunsAreaLeftPolygon.setMap(null);
    centerTypicalCerradoAreaUpPolygon.setMap(null);
    centerGroundMurundunsAreaRightPolygon.setMap(null);
    vegetation_on = false;
    infowindow.close();
  }
  else {
    addVisitantsCenterAdministrativeAreaPolygon();
    addDryForestPolygon();
    addNurseryPolygon();
    addCleanCampPolygon();
    addUrbanAreaPolygon();
    addAdministrateAreaEvolutionGardemPolygon();
    addAnthropicAreaPolygon();
    addAnthropicAreaEvolutionGardemPolygon();
    addAnthropicAreaAdministratePolygon();
    addDenseCerradoPolygon();
    addSmallDenseCerradoPolygon();
    addPinusEvolutionGardemPolygon();
    addPinusAdministrateAreaPolygon();
    addPinusUrbanAreaPolygon();
    addSmallPinusPolygon();
    addEucalyptusTypicalCerradoPolygon();
    addDirtyFieldTypicalCerradoPolygon();
    addTypicalCerradoDryForestPolygon();
    addTypicalCerradoCleanCampPolygon();
    addSouthAnthropicAreaPolygon();
    addSouthBypassAreaPolygon();
    addSouthDirtyFieldPolygon();
    addSouthDirtyFieldAreaPolygon();
    addSouthLeftBypassAreaPolygon();
    addSouthCenterBypassAreaPolygon();
    addSouthRupestresAreaTopPolygon();
    addSouthEucalyptusOnePolygon();
    addSouthEucalyptusTwoPolygon();
    addSouthEucalyptusThreePolygon();
    addSouthEucalyptusFourPolygon();
    addSouthEucalyptusFivePolygon();
    addSouthEucalyptusSixPolygon();
    addSouthEucalyptusSevenPolygon();
    addSouthEucalyptusEightPolygon();
    addSouthEucalyptusNinePolygon();
    addSouthEucalyptusTenPolygon();
    addSouthEucalyptusElevenPolygon();
    addSouthCleanCampPolygon();
    addSouthTypicalCerradoAreaPolygon();
    addSouthGalleryBushPolygon();
    addSouthPathPolygon();
    addDrainCerradoSouthPolygon();
    addSmallDrainCerradoPolygon();
    addSmallTypicalCerradoAreaPolygon();
    addSmallRockCerradoPolygon();
    addCenterThickAreaPolygon();
    addCenterBypassAreaRightPolygon();
    addCenterBypassAreaLeftPolygon();
    addCenterCerradoSparseAreaRightPolygon();
    addcenterCerradoSparseAreaLeftPolygon();
    addCenterCerradoSparseAreaRightUpPolygon();
    addCenterBypassAreaUpPolygon();
    addCenterGroundAreaRightPolygon();
    addCenterForestGaleriaAreaPolygon();
    addCenterGroundMurundunsAreaPolygon();
    addCenterGalleryBushPolygon();
    addCenterTypicalCerradoAreaPolygon();
    addCenterBypassAreaCenterPolygon();
    addCenterGroundMurundunsAreaCenterPolygon();
    addCenterCerradoSparseAreaPolygon();
    addCenterGroundMurundunsAreaLeftPolygon();
    addCenterTypicalCerradoAreaUpPolygon();
    addCenterGroundMurundunsAreaRightPolygon();
    vegetation_on = true;
  }
}

function setJbbSpaces() {
  if(markers_on) {
      amphitheaterMarker.setMap(null);
      cactusBoskMarker.setMap(null);
      centerOfExcellenceMarker.setMap(null);
      contemplationGardenMarker.setMap(null);
      evolutionaryGardenMarker.setMap(null);
      greenHouseMarker.setMap(null);
      hammockPlaceMarker.setMap(null);
      healingGardenMarker.setMap(null);
      infantParkMarker.setMap(null);
      japaneseGardenMarker.setMap(null);
      naturalLibraryMarker.setMap(null);
      orchidGardenMarker.setMap(null);
      parkingMarker.setMap(null);
      permacultureMarker.setMap(null);
      smellsGardenMarker.setMap(null);
      sunWatchMarker.setMap(null);
      teaHouseMarker.setMap(null);
      visitantCenterMarker.setMap(null);
      markers_on = false;
      infowindow.close();
  }
  else {
      addAmphitheaterMarker();
      addCactusBoskMarker();
      addCenterOfExcellenceMarker();
      addContemplationGardenMarker();
      addEvolutionaryGardenMarker();
      addGreenHouseMarker();
      addHammockPlaceMarker();
      addHealingGardenMarker();
      addInfantParkMarker();
      addJapaneseGardenMarker();
      addNaturalLibraryMarker();
      addOrchidGardenMaker(infowindow);
      addParkingMarker();
      addPermacultureMarker();
      addSmellsGardenMarker();
      addSunWatchMarker();
      addTeaHouseMarker();
      addVisitantCenterMaker();
      markers_on = true;
  }
}

function loadScript() {
  console.log("map loading ...");
  var script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyCWLcEV1-tSCf5oUTnjsny_ubD4oZmTmOc' +
  '&libraries=drawing'+
  '&callback=initialize';
  document.body.appendChild(script);
}
