function initMap(setMap) {
        var map = new google.maps.Map(document.getElementById('map'), {
          center: {lat:38.737290, lng:-9.133031},
          zoom: 14,
           styles: 
            [
              {
                "elementType": "geometry",
                "stylers": [
                  {
                    "color": "#242f3e"
                  }
                ]
              },
              {
                "elementType": "labels.text.fill",
                "stylers": [
                  {
                    "color": "#746855"
                  }
                ]
              },
              {
                "elementType": "labels.text.stroke",
                "stylers": [
                  {
                    "color": "#242f3e"
                  }
                ]
              },
              {
                "featureType": "administrative.locality",
                "elementType": "labels.text.fill",
                "stylers": [
                  {
                    "color": "#d59563"
                  }
                ]
              },
              {
                "featureType": "poi",
                "elementType": "labels.text",
                "stylers": [
                  {
                    "visibility": "off"
                  }
                ]
              },
              {
                "featureType": "poi",
                "elementType": "labels.text.fill",
                "stylers": [
                  {
                    "color": "#d59563"
                  }
                ]
              },
              {
                "featureType": "poi.business",
                "stylers": [
                  {
                    "visibility": "off"
                  }
                ]
              },
              {
                "featureType": "poi.park",
                "elementType": "geometry",
                "stylers": [
                  {
                    "color": "#263c3f"
                  }
                ]
              },
              {
                "featureType": "poi.park",
                "elementType": "labels.text.fill",
                "stylers": [
                  {
                    "color": "#6b9a76"
                  }
                ]
              },
              {
                "featureType": "road",
                "elementType": "geometry",
                "stylers": [
                  {
                    "color": "#38414e"
                  }
                ]
              },
              {
                "featureType": "road",
                "elementType": "geometry.stroke",
                "stylers": [
                  {
                    "color": "#212a37"
                  }
                ]
              },
              {
                "featureType": "road",
                "elementType": "labels.icon",
                "stylers": [
                  {
                    "visibility": "off"
                  }
                ]
              },
              {
                "featureType": "road",
                "elementType": "labels.text.fill",
                "stylers": [
                  {
                    "color": "#9ca5b3"
                  }
                ]
              },
              {
                "featureType": "road.highway",
                "elementType": "geometry",
                "stylers": [
                  {
                    "color": "#746855"
                  }
                ]
              },
              {
                "featureType": "road.highway",
                "elementType": "geometry.stroke",
                "stylers": [
                  {
                    "color": "#1f2835"
                  }
                ]
              },
              {
                "featureType": "road.highway",
                "elementType": "labels.text.fill",
                "stylers": [
                  {
                    "color": "#f3d19c"
                  }
                ]
              },
              {
                "featureType": "transit",
                "stylers": [
                  {
                    "visibility": "off"
                  }
                ]
              },
              {
                "featureType": "transit",
                "elementType": "geometry",
                "stylers": [
                  {
                    "color": "#2f3948"
                  }
                ]
              },
              {
                "featureType": "transit.station",
                "elementType": "labels.text.fill",
                "stylers": [
                  {
                    "color": "#d59563"
                  }
                ]
              },
              {
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [
                  {
                    "color": "#17263c"
                  }
                ]
              },
              {
                "featureType": "water",
                "elementType": "labels.text.fill",
                "stylers": [
                  {
                    "color": "#515c6d"
                  }
                ]
              },
              {
                "featureType": "water",
                "elementType": "labels.text.stroke",
                "stylers": [
                  {
                    "color": "#17263c"
                  }
                ]
              }
            ]
        });

        var infoWindow = new google.maps.InfoWindow({map: map});

        // Try HTML5 geolocation.
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(function(position) {
            var pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            };

            infoWindow.setPosition(pos);
            infoWindow.setContent('Estás aqui');
            map.setCenter(pos);
          }, function() {
            handleLocationError(true, infoWindow, map.getCenter());
          });
        } else {
          // Browser doesn't support Geolocation
          handleLocationError(false, infoWindow, map.getCenter());
        }
      

      function handleLocationError(browserHasGeolocation, infoWindow, pos) {
        infoWindow.setPosition(pos);
        infoWindow.setContent(browserHasGeolocation ?
                              'Error: The Geolocation service failed.' :
                              'Error: Your browser doesn\'t support geolocation.');
      }
          var myLatLng1 = {lat: 38.745459, lng: -9.122141};
          var myLatLng2 = {lat: 38.738620, lng: -9.124716};
          var myLatLng3 = {lat: 38.740930, lng: -9.146774};
          var myLatLng4 = {lat: 38.737783, lng: -9.141152};
          var myLatLng5 = {lat: 38.732858, lng: -9.134222};
          var myLatLng6 = {lat: 38.729093, lng: -9.161504};
          var myLatLng7 = {lat: 38.723602, lng: -9.155796};
          var myLatLng8 = {lat: 38.722095, lng: -9.146956};
          var myLatLng9 = {lat: 38.738148, lng: -9.162046};
          var myLatLng10 = {lat: 38.747428, lng: -9.171225};
          var myLatLng11 = {lat: 38.755708, lng: -9.175642};
          var myLatLng12 = {lat: 38.759981, lng: -9.182373};
          var myLatLng13 = {lat: 38.769631, lng: -9.173073};
          var myLatLng14 = {lat: 38.768673, lng: -9.160109};
          var myLatLng15 = {lat: 38.750977, lng: -9.154126};
          var myLatLng16 = {lat: 38.747988, lng: -9.143585};
          var myLatLng17 = {lat: 38.743871, lng: -9.147104};
          var myLatLng18 = {lat: 38.725987, lng: -9.151925};
          var myLatLng19 = {lat: 38.724681, lng: -9.168833};
          var myLatLng20 = {lat: 38.728331, lng: -9.163598};

          var marker = new google.maps.Marker({
          position: myLatLng1,
          map: map,
          icon:'images/pin_mapa.png',
        });
          var marker2 = new google.maps.Marker({
          position: myLatLng2,
          map: map,
          icon:'images/pin_mapa.png',
        });
          var marker3 = new google.maps.Marker({
          position: myLatLng3,
          map: map,
          icon:'images/pin_mapa.png',
        });
          var marker4 = new google.maps.Marker({
          position: myLatLng4,
          map: map,
          icon:'images/pin_mapa.png',
        });
          var marker5 = new google.maps.Marker({
          position: myLatLng5,
          map: map,
          icon:'images/pin_mapa.png',
        });
          var marker6 = new google.maps.Marker({
          position: myLatLng6,
          map: map,
          icon:'images/pin_mapa.png',
        });
          var marker7 = new google.maps.Marker({
          position: myLatLng7,
          map: map,
          icon:'images/pin_mapa.png',
        });
          var marker8 = new google.maps.Marker({
          position: myLatLng8,
          map: map,
          icon:'images/pin_mapa.png',
        });
          var marker9 = new google.maps.Marker({
          position: myLatLng9,
          map: map,
          icon:'images/pin_mapa.png',
        });
          var marker10 = new google.maps.Marker({
          position: myLatLng10,
          map: map,
          icon:'images/pin_mapa.png',
        });
          var marker11 = new google.maps.Marker({
          position: myLatLng11,
          map: map,
          icon:'images/pin_mapa.png',
        });
          var marker12 = new google.maps.Marker({
          position: myLatLng12,
          map: map,
          icon:'images/pin_mapa.png',
        });
          var marker13 = new google.maps.Marker({
          position: myLatLng13,
          map: map,
          icon:'images/pin_mapa.png',
        });
          var marker14 = new google.maps.Marker({
          position: myLatLng14,
          map: map,
          icon:'images/pin_mapa.png',
        });
          var marker15 = new google.maps.Marker({
          position: myLatLng15,
          map: map,
          icon:'images/pin_mapa.png',
        });
          var marker16 = new google.maps.Marker({
          position: myLatLng16,
          map: map,
          icon:'images/pin_mapa.png',
        });
          var marker17 = new google.maps.Marker({
          position: myLatLng17,
          map: map,
          icon:'images/pin_mapa.png',
        });
          var marker18 = new google.maps.Marker({
          position: myLatLng18,
          map: map,
          icon:'images/pin_mapa.png',
        });
          var marker19 = new google.maps.Marker({
          position: myLatLng19,
          map: map,
          icon:'images/pin_mapa.png',
        });
          var marker20 = new google.maps.Marker({
          position: myLatLng20,
          map: map,
          icon:'images/pin_mapa.png',
        });





    
    //inicialização do mapa 2
    
    
          var map2 = new google.maps.Map(document.getElementById('map2'), {
          center: {lat:38.737290, lng:-9.133031},
          zoom: 14,
           styles: 

            [
              {
                "elementType": "geometry",
                "stylers": [
                  {
                    "color": "#242f3e"
                  }
                ]
              },
              {
                "elementType": "labels.text.fill",
                "stylers": [
                  {
                    "color": "#746855"
                  }
                ]
              },
              {
                "elementType": "labels.text.stroke",
                "stylers": [
                  {
                    "color": "#242f3e"
                  }
                ]
              },
              {
                "featureType": "administrative.locality",
                "elementType": "labels.text.fill",
                "stylers": [
                  {
                    "color": "#d59563"
                  }
                ]
              },
              {
                "featureType": "poi",
                "elementType": "labels.text",
                "stylers": [
                  {
                    "visibility": "off"
                  }
                ]
              },
              {
                "featureType": "poi",
                "elementType": "labels.text.fill",
                "stylers": [
                  {
                    "color": "#d59563"
                  }
                ]
              },
              {
                "featureType": "poi.business",
                "stylers": [
                  {
                    "visibility": "off"
                  }
                ]
              },
              {
                "featureType": "poi.park",
                "elementType": "geometry",
                "stylers": [
                  {
                    "color": "#263c3f"
                  }
                ]
              },
              {
                "featureType": "poi.park",
                "elementType": "labels.text.fill",
                "stylers": [
                  {
                    "color": "#6b9a76"
                  }
                ]
              },
              {
                "featureType": "road",
                "elementType": "geometry",
                "stylers": [
                  {
                    "color": "#38414e"
                  }
                ]
              },
              {
                "featureType": "road",
                "elementType": "geometry.stroke",
                "stylers": [
                  {
                    "color": "#212a37"
                  }
                ]
              },
              {
                "featureType": "road",
                "elementType": "labels.icon",
                "stylers": [
                  {
                    "visibility": "off"
                  }
                ]
              },
              {
                "featureType": "road",
                "elementType": "labels.text.fill",
                "stylers": [
                  {
                    "color": "#9ca5b3"
                  }
                ]
              },
              {
                "featureType": "road.highway",
                "elementType": "geometry",
                "stylers": [
                  {
                    "color": "#746855"
                  }
                ]
              },
              {
                "featureType": "road.highway",
                "elementType": "geometry.stroke",
                "stylers": [
                  {
                    "color": "#1f2835"
                  }
                ]
              },
              {
                "featureType": "road.highway",
                "elementType": "labels.text.fill",
                "stylers": [
                  {
                    "color": "#f3d19c"
                  }
                ]
              },
              {
                "featureType": "transit",
                "stylers": [
                  {
                    "visibility": "off"
                  }
                ]
              },
              {
                "featureType": "transit",
                "elementType": "geometry",
                "stylers": [
                  {
                    "color": "#2f3948"
                  }
                ]
              },
              {
                "featureType": "transit.station",
                "elementType": "labels.text.fill",
                "stylers": [
                  {
                    "color": "#d59563"
                  }
                ]
              },
              {
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [
                  {
                    "color": "#17263c"
                  }
                ]
              },
              {
                "featureType": "water",
                "elementType": "labels.text.fill",
                "stylers": [
                  {
                    "color": "#515c6d"
                  }
                ]
              },
              {
                "featureType": "water",
                "elementType": "labels.text.stroke",
                "stylers": [
                  {
                    "color": "#17263c"
                  }
                ]
              }
            ]
        });

       
          var myLatLng_1 = {lat: 38.733721, lng: -9.173854};
          var myLatLng_2 = {lat: 38.728230, lng: -9.167889};
          var myLatLng_3 = {lat: 38.726489, lng: -9.167675};
          var myLatLng_4 = {lat: 38.727628, lng: -9.164756};
          var myLatLng_5 = {lat: 38.738615, lng: -9.140519};
          var myLatLng_6 = {lat: 38.737779, lng: -9.141678};
          var myLatLng_7 = {lat: 38.739787, lng: -9.141463};
          var myLatLng_8 = {lat: 38.739452, lng: -9.143395};
          var myLatLng_9 = {lat: 38.736954, lng: -9.140390};
          var myLatLng_10 = {lat: 38.731765, lng: -9.143137};
          var myLatLng_11 = {lat: 38.731430, lng: -9.145798};
          var myLatLng_12 = {lat: 38.730861, lng: -9.142751};
          var myLatLng_13 = {lat: 38.731886, lng: -9.134293};
          var myLatLng_14 = {lat: 38.733527, lng: -9.133563};
          var myLatLng_15 = {lat: 38.734163, lng: -9.135623};
          var myLatLng_16 = {lat: 38.736640, lng: -9.134636};
          var myLatLng_17 = {lat: 38.736674, lng: -9.130559};
          var myLatLng_18 = {lat: 38.735067, lng: -9.131804};
          var myLatLng_19 = {lat: 38.736734, lng: -9.129839};
          var myLatLng_20 = {lat: 38.737437, lng: -9.131813};

          var marker_1 = new google.maps.Marker({
          position: myLatLng_1,
          map: map2,
          icon:'images/pin_consumo.png',
        });
          var marker_2 = new google.maps.Marker({
          position: myLatLng_2,
          map: map2,
          icon:'images/pin_consumo.png',
        });
          var marker_3 = new google.maps.Marker({
          position: myLatLng_3,
          map: map2,
          icon:'images/pin_consumo.png',
        });
          var marker_4 = new google.maps.Marker({
          position: myLatLng_4,
          map: map2,
          icon:'images/pin_consumo.png',
        });
          var marker_5 = new google.maps.Marker({
          position: myLatLng_5,
          map: map2,
          icon:'images/pin_consumo.png',
        });
          var marker_6 = new google.maps.Marker({
          position: myLatLng_6,
          map: map2,
          icon:'images/pin_consumo.png',
        });
          var marker_7 = new google.maps.Marker({
          position: myLatLng_7,
          map: map2,
          icon:'images/pin_consumo.png',
        });
          var marker_8 = new google.maps.Marker({
          position: myLatLng_8,
          map: map2,
          icon:'images/pin_consumo.png',
        });
          var marker_9 = new google.maps.Marker({
          position: myLatLng_9,
          map: map2,
          icon:'images/pin_consumo.png',
        });
          var marker_10 = new google.maps.Marker({
          position: myLatLng_10,
          map: map2,
          icon:'images/pin_consumo.png',
        });
          var marker_11 = new google.maps.Marker({
          position: myLatLng_11,
          map: map2,
          icon:'images/pin_consumo.png',
        });
          var marker_12 = new google.maps.Marker({
          position: myLatLng_12,
          map: map2,
          icon:'images/pin_consumo.png',
        });
          var marker_13 = new google.maps.Marker({
          position: myLatLng_13,
          map: map2,
          icon:'images/pin_consumo.png',
        });
          var marker_14 = new google.maps.Marker({
          position: myLatLng_14,
          map: map2,
          icon:'images/pin_consumo.png',
        });
          var marker_15 = new google.maps.Marker({
          position: myLatLng_15,
          map: map2,
          icon:'images/pin_consumo.png',
        });
          var marker_16 = new google.maps.Marker({
          position: myLatLng_16,
          map: map2,
          icon:'images/pin_consumo.png',
        });
          var marker_17 = new google.maps.Marker({
          position: myLatLng_17,
          map: map2,
          icon:'images/pin_consumo.png',
        });
          var marker_18 = new google.maps.Marker({
          position: myLatLng_18,
          map: map2,
          icon:'images/pin_consumo.png',
        });
          var marker_19= new google.maps.Marker({
          position: myLatLng_19,
          map: map2,
          icon:'images/pin_consumo.png',
        });
          var marker_20 = new google.maps.Marker({
          position: myLatLng_20,
          map: map2,
          icon:'images/pin_consumo.png',
        });
        }