window.onscroll = function() {
    var v = document.getElementById("login");
    v.style.position = "fixed";
    v.style.bottom = "5px";
}


// Declare all required variables that we're going to use throughout this project
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

* This initialization function will invoke very first as soon as Google's JavaScript map API will load.
Setup required objects and load map */
function initMap(){
	directionsService = new google.maps.DirectionsService;
	directionsDisplay = new google.maps.DirectionsRenderer;
	geoCoding = new google.maps.Geocoder;
	infowindow = new google.maps.InfoWindow();
	
	if(navigator.geolocation){
		navigator.geolocation.getCurrentPosition(function(position) {
			map = new google.maps.Map(document.getElementById('map'), {
				zoom: 18,
				center: {lat: position.coords.latitude, lng: position.coords.longitude}
			});
		
			directionsDisplay.setMap(map);
		}, 
		function() {
			alert("Unable to get current location");
		});
	}
	else {
		alert("Location service not supported in your web browser!");
	}
}

// This function is use to repeatedly collect current location information 
function getCurrentLocation(){
	if(progress == "false"){ return; }
	navigator.geolocation.getCurrentPosition(function(position) {
			var latlng = {
				lat: position.coords.latitude,
				lng: position.coords.longitude
			};
			
			drawPath(latlng.lat, latlng.lng);
	}, 
	function() {
	  alert("Unable to get current location");
	});
}

/* Preserving current location to draw complete route on map. Repeatedly looking for new location
information after set time interval of five seconds */ 
function drawPath(lat, lng){
	if(status == "false"){
		start = {lat:lat,lng:lng};
		status = "true";
		getGeoLocationName(start, "source_placeholder", "Pickup at: ");
	}
	
	stop = {lat:lat,lng:lng};
	
	waypts.push({
		location: lat + "," + lng,
		stopover: false
	});
	
	setTimeout("getCurrentLocation()", 5000);
}

/* Based on current location's longitude and latitude, getting and setting meaningful readable location
name in info window. Also, centering map on exact location */ 
function getGeoLocationName(latlng, placeholder, pretext){
	geoCoding.geocode({'location': latlng}, function(results, response){
		if (response === google.maps.GeocoderStatus.OK) {
			if (results[1]){
				var location = results[1].formatted_address;
				$("#" + placeholder).html("<strong>" + pretext + "</strong>" + location);
				
				var infowindow = new google.maps.InfoWindow({
					maxWidth: 200
				});
				
				map.center = {lat: latlng.lat, lng: latlng.lng};
				infowindow.setContent(location);
				infowindow.setPosition(latlng);
				infowindow.open(map);
				infoWindows.push(infowindow);
			}
		}
	});
}

/* This is playing very important role in this project. Based on preserved locations from beginning to end
journey, drawing complete actual path/route from source to destination on map. Also, showing total
kilometers traveled and overall time taken */
function displayTravelledRouteOnMap(){
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

/* This is simply a function to shuffle an array elements. I had taken this function from StackOverflow.com
to fulfill my shuffling and shortlisting requirement. Performed little modification to return only eight
elements instead of all.
Source: http://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array */
function shuffle(array) {
	var counter = 1;
	var currentIndex = array.length, temporaryValue, randomIndex;
 
	while (0 !== currentIndex) {
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;
		temporaryValue = array[currentIndex];
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = temporaryValue;
	}
  
	var arrlen = array.length;
	if(arrlen > 8){
		for(var i = 0; i < (arrlen - 8); i++){
			array.shift();
		}
	}
 
	return array;
}


// These are simply event handlers when clicking on various buttons to take action 
$(document).ready(function(){
	$("#source").click(function(){
		getCurrentLocation();	
	});
	
	$("#destination").click(function(){
		progress = "false";
		infoWindows[0].close();
		getGeoLocationName(stop, "destination_placeholder", "Drop at: ");
	});
	
	$("#calculate").click(function(){
		infoWindows[1].close();
		displayTravelledRouteOnMap();
	});
});	
</script>