function locateHospitals() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showMap, showError);
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }
  
  function showMap(position) {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    const userLocation = new google.maps.LatLng(lat, lng);
  
    const map = new google.maps.Map(document.getElementById("map"), {
      center: userLocation,
      zoom: 15,
    });
  
    // User marker
    new google.maps.Marker({
      position: userLocation,
      map: map,
      title: "Your Location",
      icon: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png"
    });
  
    // Search nearby hospitals
    const service = new google.maps.places.PlacesService(map);
    const request = {
      location: userLocation,
      radius: 5000,
      type: ["hospital"],
    };
  
    service.nearbySearch(request, function (results, status) {
      if (status == google.maps.places.PlacesServiceStatus.OK) {
        for (let i = 0; i < results.length; i++) {
          createMarker(results[i], map);
        }
      }
    });
  }
  
  function createMarker(place, map) {
    if (!place.geometry || !place.geometry.location) return;
  
    new google.maps.Marker({
      map: map,
      position: place.geometry.location,
      title: place.name,
      icon: "http://maps.google.com/mapfiles/ms/icons/hospitals.png"
    });
  }
  
  function showError(error) {
    switch (error.code) {
      case error.PERMISSION_DENIED:
        alert("User denied the request for Geolocation.");
        break;
      case error.POSITION_UNAVAILABLE:
        alert("Location information is unavailable.");
        break;
      case error.TIMEOUT:
        alert("The request to get user location timed out.");
        break;
      default:
        alert("An unknown error occurred.");
        break;
    }
  }
  