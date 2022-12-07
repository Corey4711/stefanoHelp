import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit {
  center: google.maps.LatLngLiteral = {
    lng: -9.01040036693233,
    lat: 53.28009773241228,
  };

  pos = { lng: -9.01040036693233, lat: 53.28009773241228 }; // position of the map and the marker

  options: google.maps.MapOptions = {
    zoomControl: false,
    scrollwheel: true,
    disableDoubleClickZoom: true,
    mapTypeId: 'roadmap',
    disableDefaultUI: true,
    zoom: 14,
    styles: [
      //Hides Landmarks
      {
        featureType: 'poi',
        stylers: [{ visibility: 'off' }],
      },
    ],
  };
  markerOptions = { animation: google.maps.Animation.DROP };

  ngOnInit() {
    // UNACCURATE AT HOME
    //   navigator.geolocation.getCurrentPosition((position) => {
    //     this.center = {
    //       lat: position.coords.latitude,
    //       lng: position.coords.longitude,
    //     };
    //   });
  }
}
