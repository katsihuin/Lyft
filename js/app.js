function init() {
  getMyLocation();
}

var map;

function getMyLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(displayLocation);
  } else {
    alert('Sin soporte de geolocalización');
  }
}


//función invoca asincrónicamente por la API de geolocalización HTML5
function displayLocation(position) {

  //Valores de latitud y longitud obtenidos de HTML5 API
  var latitude = position.coords.latitude;
  var longitude = position.coords.longitude;
    console.log(position.coords.latitude,position.coords.longitude);


  // Creando un nuevo objeto para el uso de valores de latitud y longitud con Google map
  var latLng = new google.maps.LatLng(latitude, longitude);

  var div = document.getElementById('location');
  div.innerHTML = 'Estas aqui: Latitud:' + latitude + ', Longitude: ' + longitude;

  initMap(latLng);
  createMarker(latLng);

}

function initMap(latLng) {
  //Creando instancia de mapa y asignando al elemento 'map' HTML para renderizarlo.
   map = new google.maps.Map(document.getElementById('map'), {
    center: latLng,
    zoom: 15
  });

}

function createMarker(latLng) {
  var markerOptions = {
    position: latLng,
    map: map,
    animation: google.maps.Animation.DROP,
    clickable: true,
    title: '¡Estoy Aqui!',
    icon: 'img/person2.png'
  }
  var marker = new google.maps.Marker(markerOptions);
    
    var location1 = {lat: -16.4526377 , lng: -71.531716};
    var marker = new google.maps.Marker({
    position: location1,
    map: map,
    animation: google.maps.Animation.DROP,
    clickable: true,
    title: 'taxi lyft',
    icon: 'img/coche2x.png'});
        
   
    var location2 = {lat: -16.450210, lng: -71.524850};
    var marker = new google.maps.Marker({
    position: location2,
    map: map,
    animation: google.maps.Animation.DROP,
    clickable: true,
    title: 'taxi lyft',
    icon: 'img/coche3x.png'});
    
    var location3 = {lat: -16.460787, lng: -71.528755};
    var marker = new google.maps.Marker({
    position: location3,
    map: map,
    animation: google.maps.Animation.DROP,
    clickable: true,
    title: 'taxi lyft',
    icon: 'img/coche4x.png'});
    
    var location4 = {lat: -16.455830 , lng: -71.538262};
    var marker = new google.maps.Marker({
    position: location4,
    map: map,
    animation: google.maps.Animation.DROP,
    clickable: true,
    title: 'taxi lyft',
    icon: 'img/coche5x.png'});
    
    var location5 = {lat: -16.456036 , lng: -71.520023};
    var marker = new google.maps.Marker({
    position: location5,
    map: map,
    animation: google.maps.Animation.DROP,
    clickable: true,
    title: 'taxi lyft',
    icon: 'img/coche6x.png'});

  var content = 'Estas aqui: ' + latLng.lat() + ', ' + latLng.lng();
  addInfoWindow(marker, latLng, content);
  

}

function addInfoWindow(marker, latLng, content) {
  var infoWindowOptions = {
    content: content,
    position: latLng
  };

  var infoWindow = new google.maps.InfoWindow(infoWindowOptions);

  google.maps.event.addListener(marker, 'click', function() {
    infoWindow.open(map);
  });
}


var directionsService;
var directionsDisplay;
var geoCoding;
var waypts = [];
var infoWindows = [];
var start;
var stop;
var map;
var progress = "true";
var status = "false"; 


/*function displayTravelledRouteOnMap(){
  waypts.shift();
  waypts.pop();
  
  if(waypts.length > 8){
    waypts = shuffle(waypts);
  }
  
  directionsService.route({
    origin: start,
    destination: stop,
    waypoints: waypts,
    optimizeWaypoints: true,
    travelMode: google.maps.TravelMode.DRIVING
  },function(response, status) {
    if (status === google.maps.DirectionsStatus.OK) {
      directionsDisplay.setDirections(response);
      
      var route = response.routes[0];
      var summaryPanel = document.getElementById('directions-panel');
      summaryPanel.innerHTML = '';
      var summary = "";
      
      for (var i = 0; i < route.legs.length; i++) {
        var routeSegment = i + 1;
        summary = "<strong>Summary:</strong> You have travelled from <b><i>" + route.legs[i].start_address + "</i></b> to <b><i>";
        summary += route.legs[i].end_address + ".</i></b> Covered <b><i> ";
        summary += route.legs[i].distance.text + "</i></b> within <b><i>" + route.legs[i].duration.text + "</i></b>.";
        summaryPanel.innerHTML = summary;
      }
    } 
    else {
      window.alert('Directions request failed due to ' + status);
    }
  });
}

var location1 = {lat: -16.42555, lng: -71.45724};
var marker = new google.maps.Marker({
position: latLng,
map: map,
title: 'taxi lyft',
icon: 'img/taxi.jpg'});*/