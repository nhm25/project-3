function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat:35.699, lng: 139.775},
    zoom: 10
  });

  var marker = new google.maps.Marker({
    position: {lat:35.699, lng: 139.775},
    map: map,
    icon: "media/location-pin.png",
  });

  var infowindow = new google.maps.InfoWindow({
    content: "Tokyo's a place I would like to visit someday. One of the main reasons why is because it has a lot of cool lights at night."
  });

  infowindow.open(map, marker);

  var clicks = 0;
  marker.addListener("click", () => {
    if (clicks == 0) {
      infowindow.close();
      clicks = clicks + 1;
    } else {
      infowindow.open(map, marker);
      clicks = 0;
    }
  });

  map.controls[google.maps.ControlPosition.RIGHT_TOP].push(document.getElementById('legend'));
  
  var legend = document.getElementById('legend');
  var div = document.createElement('div');
  div.innerHTML = '<img src="media/legend-pin.png"> ' + "Tokyo";
  legend.appendChild(div);
  
}

window.initMap = initMap;