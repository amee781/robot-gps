var gps = false;
function markerUpdateGPS(lat,lng){
    if(gps==true){
        map.setCenter(new google.maps.LatLng(lat, lng));
        marker.setPosition(new google.maps.LatLng(lat, lng));
    }else{
        gps = true;
        dialog.hide();
        map.setCenter(new google.maps.LatLng(lat, lng));
        marker = new google.maps.Marker({
            map: map,
            zoom: 15,
            position: new google.maps.LatLng(lat, lng),
            icon: 'img/car.png'
          });

    }
    
}
