var map;
var marker;
var directionsService;
var directionsRenderer;
var watchId;

// Initialize the map
function initMap() {
  directionsService = new google.maps.DirectionsService();
  directionsRenderer = new google.maps.DirectionsRenderer({
    map: map,
    suppressMarkers: true,
    polylineOptions: {
      strokeColor: "#000000",
    },
  });

  // Get the driver's current position
  navigator.geolocation.getCurrentPosition(
    function (position) {
      var currentLocation = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      };

      map = new google.maps.Map(document.getElementById("map"), {
        zoom: 14,
        center: currentLocation,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        styles: [
          {
            featureType: "poi",
            stylers: [{ visibility: "off" }],
          },
          {
            featureType: "transit",
            stylers: [{ visibility: "off" }],
          },
        ],
      });

      // Get the road name for the current location
      var geocoder = new google.maps.Geocoder();
      geocoder.geocode(
        { location: currentLocation },
        function (results, status) {
          if (status === google.maps.GeocoderStatus.OK) {
            if (results[0]) {
              var roadName = results[0].formatted_address;
              createMarker(currentLocation, roadName); // Call the function to create marker
            }
          } else {
            console.error("Geocoder failed due to: " + status);
          }
        }
      );

      function createMarker(location, title) {
        marker = new google.maps.Marker({
          map: map,
          position: location,
          icon: {
            url: "assets/icons/blue-dot.svg",
          },
          title: title,
        });
      }

      // Start watching driver's position after the map is initialized
      watchDriverPosition();
    },
    function (error) {
      alert("Error occurred. Unable to track driver's location.");
    }
  );
}

// Start watching the driver's position
function watchDriverPosition() {
  watchId = navigator.geolocation.watchPosition(
    function (position) {
      var currentLocation = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      };
      marker.setPosition(currentLocation);
      map.setCenter(currentLocation);
    },
    function (error) {
      alert("Error occurred. Unable to track driver's location.");
    }
  );
}

// Function to start the ride
function startRide() {
  var pickUpLocation = document.getElementById("Pick_Up_Location").value;
  var dropOffLocation = document.getElementById("Drop_Off_Location").value;
  var rideFormBtn = document.getElementsByClassName("ride-btn")[0];
  var endRide = document.getElementsByClassName("end-ride")[0];

  var request = {
    origin: pickUpLocation,
    destination: dropOffLocation,
    travelMode: "DRIVING",
  };

  if (request) {
    rideFormBtn.style.display = "none";
    endRide.style.display = "block";
  }

  directionsService.route(request, function (result, status) {
    if (status == "OK") {
      directionsRenderer.setDirections(result);
    } else {
      window.alert("Directions request failed due to " + status);
    }
  });
}

// Function to initialize the map and search for location
function initMap() {
  var map = new google.maps.Map(document.getElementById("search_map"), {
    center: { lat: 0, lng: 0 },
    zoom: 2,
    disableDefaultUI: true, // Remove default UI controls
    gestureHandling: "none", // Disable map panning and zooming
    styles: [
      {
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#ffffff", // White color for text labels
          },
        ],
      },
    ],
  });

  var geocoder = new google.maps.Geocoder();

  // Autocomplete for search input
  var input = document.getElementById("Search_Location");
  var autocomplete = new google.maps.places.Autocomplete(input);

  // Function to create a custom marker
  function createMarker(location, title) {
    var marker = new google.maps.Marker({
      map: map,
      position: location,
      icon: {
        url: "assets/icons/map-pin-range-fill.svg",
      },
      title: title,
    });
  }

  autocomplete.addListener("place_changed", function () {
    var place = autocomplete.getPlace();
    if (!place.geometry) {
      window.alert("No details available for input: " + place.name);
      return;
    }

    map.setCenter(place.geometry.location);
    map.setZoom(15); // Zoom in to the selected location

    // Remove previous markers
    map.data.forEach(function (feature) {
      map.data.remove(feature);
    });

    // Add custom marker
    createMarker(place.geometry.location, place.name);
  });
}
