var acessibleTrail;

var acessibleTrailContentString =
    '<div id="content">'+
    '<div id="siteNotice">'+
    '</div>'+
    '<h1 id="firstHeading" class="firstHeading">Trilha Cadeirantes</h1>'+
    // '<div id="bodyContent">'+
    // '<p>A <b>Trilha Cadeirantes</b>, ............. ' +
    // '  '+
    // '. '+
    // '<p>Leia mais em: <a href="/trails/acessible_trail">'+
    // 'Trilha Cadeirantes</a> '+
    // '</div>'+
    '</div>';

var acessibleTrailCoordinates = [
    {lat: -15.876009179916103, lng: -47.83534818413955},
    {lat: -15.875982090978285, lng: -47.83523687246543},
    {lat: -15.875978221129722, lng: -47.83518591049415},
    {lat: -15.875975641230655, lng: -47.835124219686804},
    {lat: -15.875965321634004, lng: -47.835069234402},
    {lat: -15.875942102539621, lng: -47.83502229574424},
    {lat: -15.875915013592797, lng: -47.83498072150451},
    {lat: -15.875881474891676, lng: -47.83495926383239},
    {lat: -15.875865995489269, lng: -47.83494853499633},
    {lat: -15.875853095986361, lng: -47.83491500738364},
    {lat: -15.875846646234608, lng: -47.83488013866645},
    {lat: -15.875842776383436, lng: -47.834861363203345},
    {lat: -15.87584922613533, lng: -47.834839905531226},
    {lat: -15.87583632663134, lng: -47.83481174233657},
    {lat: -15.875782148705607, lng: -47.834787602455435},
    {lat: -15.875685402373389, lng: -47.834746028215704},
    {lat: -15.875653857158055, lng: -47.83472065390697},
    {lat: -15.875625478220678, lng: -47.83468846739879},
    {lat: -15.87560483899099, lng: -47.83465628089061},
    {lat: -15.875583554783155, lng: -47.83462007106891},
    {lat: -15.8755719452143, lng: -47.83457112075439},
    {lat: -15.875566785405693, lng: -47.834512782708316},
    {lat: -15.875564205501359, lng: -47.83440549432726},
    {lat: -15.875540341384573, lng: -47.83432905137033},
    {lat: -15.875508092573622, lng: -47.83424590289087},
    {lat: -15.875501642810814, lng: -47.83422444521875},
    {lat: -15.875486808355573, lng: -47.83418689429254},
    {lat: -15.87547390882838, lng: -47.834162083859155},
    {lat: -15.875448754747987, lng: -47.8341426378438},
    {lat: -15.875419085828625, lng: -47.83413190900774},
    {lat: -15.875390706858171, lng: -47.834115145201395},
    {lat: -15.875368132674279, lng: -47.83409100532026},
    {lat: -15.875279067231395, lng: -47.834028537299105},
    {lat: -15.875210699657385, lng: -47.83400573852248},
    {lat: -15.875183024270981, lng: -47.83399981023166},
    {lat: -15.875148840470587, lng: -47.83401992679927},
    {lat: -15.875110786799173, lng: -47.8340427255759},
    {lat: -15.875033389479208, lng: -47.834081617606614},
    {lat: -15.875006945388066, lng: -47.834088993681405},
    {lat: -15.87492503318129, lng: -47.83408631147239},
    {lat: -15.874908263768715, lng: -47.834096369758754},
    {lat: -15.874866340181947, lng: -47.83412855626693},
    {lat: -15.874848280788033, lng: -47.83413392068496},
    {lat: -15.87481796680175, lng: -47.83416409553638},
    {lat: -15.874788942768067, lng: -47.83418220044723},
    {lat: -15.874759918730183, lng: -47.834198964253574},
    {lat: -15.874735409539417, lng: -47.83419292928329},
    {lat: -15.874696710811032, lng: -47.83415269614295},
    {lat: -15.874670266675706, lng: -47.83416074277511},
    {lat: -15.874619958311099, lng: -47.83418689431301},
    {lat: -15.874563200141093, lng: -47.83421237529865},
    {lat: -15.87447999779479, lng: -47.83423115076175},
    {lat: -15.874434204221018, lng: -47.83421773971668},
    {lat: -15.874360676520832, lng: -47.83420969308963},
    {lat: -15.874322622700555, lng: -47.834198964253574},
    {lat: -15.874281343972116, lng: -47.83417281271568},
    {lat: -15.874255544767477, lng: -47.83415202559581},
    {lat: -15.874222005790106, lng: -47.83415470780483},
    {lat: -15.874167827430252, lng: -47.83416409553638},
    {lat: -15.874199431475274, lng: -47.83427272500148},
    {lat: -15.874225875669927, lng: -47.83438135446147},
    {lat: -15.874239420257362, lng: -47.8344591385229},
    {lat: -15.87423684033602, lng: -47.834473890672484},
    {lat: -15.874219425866077, lng: -47.8344852900608},
    {lat: -15.874156804119108, lng: -47.83448987729571},
    {lat: -15.874105205664769, lng: -47.83449524171374},
    {lat: -15.874061346968205, lng: -47.8345059705498},
    {lat: -15.874013618375802, lng: -47.834512676072336},
    {lat: -15.873973043201692, lng: -47.83450741831075},
    {lat: -15.873956918671425, lng: -47.834494007265675},
    {lat: -15.873941439121161, lng: -47.83446047965299},
    {lat: -15.8739356342895, lng: -47.834430975353825},
    {lat: -15.873946598971381, lng: -47.834342462456334},
    {lat: -15.873893710502816, lng: -47.83430692314596},
    {lat: -15.87382534245871, lng: -47.834270042772005},
    {lat: -15.873758909337038, lng: -47.83423986792059},
    {lat: -15.873691186226827, lng: -47.83425529062242},
    {lat: -15.873593793908153, lng: -47.83433441578836},
    {lat: -15.873555739943036, lng: -47.8343686139533},
    {lat: -15.873528650695038, lng: -47.8343183225752},
    {lat: -15.873515751017875, lng: -47.834304911530126},
    {lat: -15.873486726796601, lng: -47.834294182694066},
    {lat: -15.873466732330623, lng: -47.834268701708424},
    {lat: -15.87345254270839, lng: -47.83423852685701},
    {lat: -15.873451897725552, lng: -47.834202317035306},
    {lat: -15.87345254270839, lng: -47.83417080107938},
    {lat: -15.873459637519636, lng: -47.83414666119825},
    {lat: -15.873467377313425, lng: -47.834129897391904},
    {lat: -15.87343899806807, lng: -47.83411648634683},
    {lat: -15.873255177883971, lng: -47.83402998506517},
    {lat: -15.873231313493696, lng: -47.83402462064714},
    {lat: -15.873208739067877, lng: -47.834025291199396},
    {lat: -15.873183584704682, lng: -47.83402797340841},
    {lat: -15.873149341948064, lng: -47.83405401833079},
    {lat: -15.873075813778987, lng: -47.834135825705744},
    {lat: -15.873047434478494, lng: -47.83415191895983},
    {lat: -15.873014598901323, lng: -47.83415604888887},
    {lat: -15.873001054231562, lng: -47.83415806054563},
    {lat: -15.872943005636541, lng: -47.83420298754663},
    {lat: -15.872913336348196, lng: -47.83422176300974},
    {lat: -15.87281078377438, lng: -47.834251937861154},
    {lat: -15.872782404436562, lng: -47.83427607774229},
    {lat: -15.872741125392583, lng: -47.834300888175676},
    {lat: -15.872689526575739, lng: -47.83431295813671},
    {lat: -15.87252247531553, lng: -47.8343391096746},
    {lat: -15.872481196178947, lng: -47.8343478268539},
    {lat: -15.872417987544948, lng: -47.83438001336208},
    {lat: -15.872201272077834, lng: -47.834445727482944},
    {lat: -15.87214709317465, lng: -47.83445444466224},
    {lat: -15.87207678957617, lng: -47.8344826078569},
    {lat: -15.872060019906845, lng: -47.83448864282718},
    {lat: -15.872006485953158, lng: -47.834561062470584},
    {lat: -15.871972888023453, lng: -47.834579731215854},
    {lat: -15.871934247381871, lng: -47.83458989619703},
    {lat: -15.871854913877831, lng: -47.83461805939169},
    {lat: -15.871790415071034, lng: -47.83463079988451},
    {lat: -15.87177235540143, lng: -47.834635493750284},
    {lat: -15.87172978617383, lng: -47.83469785510988},
    {lat: -15.871702696660675, lng: -47.83475954591722},
    {lat: -15.87168334700618, lng: -47.83480380236597},
    {lat: -15.871689151902723, lng: -47.83483129500837},
    {lat: -15.871713661464064, lng: -47.834858787650774},
    {lat: -15.87172978617383, lng: -47.834894997472475},
    {lat: -15.871756875683344, lng: -47.83495937050736},
    {lat: -15.871771710413206, lng: -47.83501234413541},
    {lat: -15.871794929988184, lng: -47.83510890365994},
    {lat: -15.8717975099408, lng: -47.83516724170602},
    {lat: -15.871794285000027, lng: -47.835249719633225},
    {lat: -15.87179364001187, lng: -47.83530403436771},
    {lat: -15.871789125094681, lng: -47.83535298468223},
    {lat: -15.871787835118342, lng: -47.835375112906604},
    {lat: -15.871800734881509, lng: -47.835395229474216},
    {lat: -15.871814924620045, lng: -47.83540729941478},
    {lat: -15.871836854214, lng: -47.83541400493732},
    {lat: -15.871865878672924, lng: -47.835416687146335},
    {lat: -15.871891678188454, lng: -47.83541065217605},
    {lat: -15.871919412644285, lng: -47.83540394664328},
    {lat: -15.871947088478954, lng: -47.83539914609037},
    {lat: -15.871993527585829, lng: -47.835395122776845},
    {lat: -15.872036096757704, lng: -47.83538037062726},
    {lat: -15.872080659519334, lng: -47.83536438406031},
    {lat: -15.87211091528045, lng: -47.8353508663281},
    {lat: -15.872201213460555, lng: -47.83533477307401},
    {lat: -15.872269582055726, lng: -47.83531733871541},
    {lat: -15.87234053057336, lng: -47.835295881043294},
    {lat: -15.872420391618256, lng: -47.83527152782881},
    {lat: -15.872523589376584, lng: -47.835242023529645},
    {lat: -15.872637106849703, lng: -47.835225930275556},
    {lat: -15.872750155164493, lng: -47.83517931166898},
    {lat: -15.872815943633874, lng: -47.83514444295179},
    {lat: -15.872830719648993, lng: -47.835132266354776},
    {lat: -15.872839749436565, lng: -47.835117514205194},
    {lat: -15.872851359162858, lng: -47.835074598860956},
    {lat: -15.872856519040992, lng: -47.83502363688967},
    {lat: -15.872873288644017, lng: -47.83499010927699},
    {lat: -15.872893928153532, lng: -47.834975357127405},
    {lat: -15.872926236019648, lng: -47.83496205271831},
    {lat: -15.872962355150392, lng: -47.83496339382282},
    {lat: -15.873037173329216, lng: -47.83496004106155},
    {lat: -15.87306039275837, lng: -47.83498015762916},
    {lat: -15.873100381769, lng: -47.835017038003116},
    {lat: -15.873128116078142, lng: -47.83503246070495},
    {lat: -15.873171329974419, lng: -47.835060623879144},
    {lat: -15.87320997038125, lng: -47.83508264544707},
    {lat: -15.87325511923009, lng: -47.8350880098651},
    {lat: -15.87333110999098, lng: -47.835137417378064},
    {lat: -15.873439467146097, lng: -47.83517228609526},
    {lat: -15.873506545355783, lng: -47.83519642597639},
    {lat: -15.873578783402772, lng: -47.835263481201764},
    {lat: -15.873620062275126, lng: -47.83542441374266},
    {lat: -15.873697460138025, lng: -47.83553438431227},
    {lat: -15.873749058696776, lng: -47.83565240150892},
    {lat: -15.87380839702299, lng: -47.83575968986952},
    {lat: -15.873852255774631, lng: -47.835834791721936},
    {lat: -15.873890954665184, lng: -47.83591525799238},
    {lat: -15.873893534590955, lng: -47.83610569483244},
    {lat: -15.873939973249232, lng: -47.836239805283185},
    {lat: -15.87398383197222, lng: -47.836344411434766},
    {lat: -15.874025110761615, lng: -47.83644365316832},
    {lat: -15.874071549389548, lng: -47.83652948385679},
    {lat: -15.87409734862267, lng: -47.836580445828076},
    {lat: -15.874081986356021, lng: -47.83659272912246},
    {lat: -15.874025228034451, lng: -47.83661284569007},
    {lat: -15.873980782975764, lng: -47.83662234009853},
    {lat: -15.873914349905338, lng: -47.836639774457126},
    {lat: -15.873698926015413, lng: -47.83670146526447},
    {lat: -15.873678286588365, lng: -47.83670146526447},
    {lat: -15.873650552354945, lng: -47.83669475974193},
    {lat: -15.8736266880115, lng: -47.836661232129245},
    {lat: -15.873494466594272, lng: -47.83649694682708},
    {lat: -15.873468022301148, lng: -47.83647884191623},
    {lat: -15.873442867970322, lng: -47.83646610142341},
    {lat: -15.873400299095623, lng: -47.83646274866214},
    {lat: -15.873357730231623, lng: -47.836459395900874},
    {lat: -15.873308711505928, lng: -47.83645872534862},
    {lat: -15.873252597950032, lng: -47.83645269037834},
    {lat: -15.873195839394834, lng: -47.836450678721576},
    {lat: -15.872923656061802, lng: -47.83642989159148},
    {lat: -15.872741770417075, lng: -47.83641782165603},
    {lat: -15.87271081112865, lng: -47.83641782165603},
    {lat: -15.87266566215783, lng: -47.83642787993983},
    {lat: -15.87241405912881, lng: -47.836516286124606},
    {lat: -15.872245072680117, lng: -47.83659675239505},
    {lat: -15.872096784258792, lng: -47.8366914069602},
    {lat: -15.87201358089404, lng: -47.836753768319795},
    {lat: -15.871979220822011, lng: -47.83678965804938},
    {lat: -15.871912142103897, lng: -47.83684330222968},
    {lat: -15.871876022784903, lng: -47.83688085315589},
    {lat: -15.871883762639515, lng: -47.83698009488944},
    {lat: -15.87189666239655, lng: -47.83707665441398},
    {lat: -15.871904402250376, lng: -47.83720540044669},
    {lat: -15.871923927617605, lng: -47.83736330031843},
    {lat: -15.871931667470374, lng: -47.837380734677026},
    {lat: -15.871947147175035, lng: -47.83738811075182},
    {lat: -15.87195095840493, lng: -47.837490731890284},
    {lat: -15.87197546793443, lng: -47.837579244787776},
    {lat: -15.871992237610774, lng: -47.83767580431231},
    {lat: -15.872039966681978, lng: -47.83785014789828},
    {lat: -15.87215958249539, lng: -47.83794579688333},
    {lat: -15.872242140813134, lng: -47.83794579688333},
    {lat: -15.872329389913006, lng: -47.83796425230548},
    {lat: -15.872484186600579, lng: -47.83796425230548},
    {lat: -15.872638983169251, lng: -47.83796425230548},
    {lat: -15.872793779619007, lng: -47.837921336961244},
    {lat: -15.872958895701013, lng: -47.83785696394489},
    {lat: -15.873093052417993, lng: -47.83780331976459},
    {lat: -15.873175610353293, lng: -47.83772821791217},
    {lat: -15.873330406390787, lng: -47.837631658387636},
    {lat: -15.873392324772503, lng: -47.83745999701068},
    {lat: -15.873454712188556, lng: -47.83723447812008},
    {lat: -15.873619827728952, lng: -47.837127189759485},
    {lat: -15.87375914386091, lng: -47.83706818116116},
    {lat: -15.873865155405637, lng: -47.83700959927046},
    {lat: -15.873921913772291, lng: -47.83698277718031},
    {lat: -15.87398383197222, lng: -47.836964001717206},
    {lat: -15.874043170229303, lng: -47.83692108637297},
    {lat: -15.87409734862267, lng: -47.83688889986479},
    {lat: -15.874161846691031, lng: -47.836859395565625},
    {lat: -15.874236664424462, lng: -47.83682452684843},
    {lat: -15.87418248606854, lng: -47.836752107197356},
    {lat: -15.874148947079004, lng: -47.83669578080804},
    {lat: -15.874133467543498, lng: -47.83665018325479},
    {lat: -15.874107668315006, lng: -47.83658741803265},
    {lat: -15.87410010443534, lng: -47.836578485575956},
    {lat: -15.874156686767595, lng: -47.83655523144262},
    {lat: -15.874213445052114, lng: -47.83654718481557},
    {lat: -15.874265043478717, lng: -47.83654182039754},
    {lat: -15.87432156710863, lng: -47.83653495476756},
    {lat: -15.874362845828825, lng: -47.83653495476756},
    {lat: -15.874455722918325, lng: -47.83654031918559},
    {lat: -15.874512481118622, lng: -47.83654031918559},
    {lat: -15.87456877005529, lng: -47.83653731676168},
    {lat: -15.874713245361692, lng: -47.83654804559774},
    {lat: -15.874868040217876, lng: -47.83654804559774},
    {lat: -15.874971706126743, lng: -47.836556412603386},
    {lat: -15.875126500784333, lng: -47.836604692365654},
    {lat: -15.875224537339307, lng: -47.836604692365654},
    {lat: -15.875265815874496, lng: -47.83671198072625},
    {lat: -15.875296774770339, lng: -47.8367924469967},
    {lat: -15.875374171989124, lng: -47.836846091176994},
    {lat: -15.875503167287695, lng: -47.83686754884911},
    {lat: -15.875600734571634, lng: -47.836848453334824},
    {lat: -15.875637322310595, lng: -47.83681926912777},
    {lat: -15.875652801730574, lng: -47.836776353783534},
    {lat: -15.875673440955353, lng: -47.83667442984097},
    {lat: -15.87567860076121, lng: -47.8366261500787},
    {lat: -15.87567860076121, lng: -47.83656177706234},
    {lat: -15.875657961536954, lng: -47.83647058195584},
    {lat: -15.875652801730574, lng: -47.83640084452145},
    {lat: -15.875647641924042, lng: -47.83633110708706},
    {lat: -15.875647641924042, lng: -47.83622381872647},
    {lat: -15.875647641924042, lng: -47.83613798803799},
    {lat: -15.875642482117398, lng: -47.83605215734951},
    {lat: -15.875642482117398, lng: -47.835993148751186},
    {lat: -15.875663121343218, lng: -47.83592877573483},
    {lat: -15.875683760724403, lng: -47.83590195360375},
    {lat: -15.875709559751082, lng: -47.8358751315136},
    {lat: -15.875765848668236, lng: -47.8358721292534},
    {lat: -15.875807127092513, lng: -47.835839942745224},
    {lat: -15.875869044713083, lng: -47.835839942745224},
    {lat: -15.875910323116216, lng: -47.83593650226976},
    {lat: -15.875926271129808, lng: -47.83598778437408},
    {lat: -15.875962389722746, lng: -47.83604142855438},
    {lat: -15.876029467092458, lng: -47.83607897948059},
    {lat: -15.876106864029765, lng: -47.83606825064453},
    {lat: -15.876163621764903, lng: -47.83602533530029},
    {lat: -15.876163621764903, lng: -47.835944869029845},
    {lat: -15.876127503208032, lng: -47.83584830950531},
    {lat: -15.876117183619167, lng: -47.83576784323486},
    {lat: -15.876101704234875, lng: -47.835682012546386},
    {lat: -15.87608622484939, lng: -47.83559081743988},
    {lat: -15.87606042587095, lng: -47.83554253767761},
    {lat: -15.876009179916103, lng: -47.83534818413955},
];

var acessibleTrailColor = '#ff0066';

function addAcessibleTrail(){
    //create the river
    acessibleTrail = createTrail(acessibleTrailCoordinates, acessibleTrailColor);

    //set the river on map
    acessibleTrail.setMap(map);

    //add a listener to open a infowindow every time the river is clicked
    google.maps.event.addListener(acessibleTrail, 'click', function(clicked_location) {
        addInfowindow(clicked_location.latLng, acessibleTrailContentString);
    });
}