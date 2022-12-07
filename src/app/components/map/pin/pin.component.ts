import { Component, Input, OnInit } from '@angular/core';
import { filter, Observable, take } from 'rxjs';
import { locationPins } from 'src/app/models/locatinon-pins.model';
import { notNull } from 'src/app/store';
import { LocationSelectors } from 'src/app/store/selectors/location.selector';

@Component({
  selector: 'pin',
  templateUrl: './pin.component.html',
  styleUrls: ['./pin.component.scss'],
})
export class PinComponent implements OnInit {

@Input()
set pinsOnMap(pins:locationPins[]){
  this._pinsOnMap = pins;
}
  _pinsOnMap:locationPins[]=[];


  pins$: Observable<locationPins[]>;


  constructor(private locationSelector: LocationSelectors) {}


  ngOnInit(): void {
  this.pins$ = this.locationSelector.getAllPins().pipe(filter(notNull));

    this._setAllPins();
  }

  private _setAllPins() {
      this.pins$.forEach((pin) => {
        console.error("pin");
        console.error(pin);
      });
  }

    pos = { lng: -9.010593598197579, lat: 53.28006120167073 }; // position of the map and the marker
  // pos = { lng: 0, lat: 0 };
  markerOptions = { animation: google.maps.Animation.DROP };
}
