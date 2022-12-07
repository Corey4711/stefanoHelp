import { Component, Input, OnInit } from '@angular/core';
import { Observable, filter, take } from 'rxjs';
import { locationPins } from 'src/app/models/locatinon-pins.model';
import { notNull } from 'src/app/store';
import { LocationSelectors } from 'src/app/store/selectors/location.selector';

@Component({
  selector: 'map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit {
  center: google.maps.LatLngLiteral = {
    lng: 0,
    lat: 0,
  };

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

  ngOnInit() {
    navigator.geolocation.getCurrentPosition((position) => {
      this.center = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      };
    });
  }
}
