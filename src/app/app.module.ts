import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { MapComponent } from './components/map/map-home/map.component';
import { PinComponent } from './components/map/pin/pin.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { LocationSelectors } from './store/selectors/location.selector';
import { StoreModule } from '@ngrx/store';
import { appReducers } from './store/reducers/app.reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { LocationEffects } from './store/effects/location.effect';
import { EffectsModule } from '@ngrx/effects';
import { LocationActions } from './store/actions/location.actions';


@NgModule({
  declarations: [AppComponent, HeaderComponent, MapComponent, PinComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GoogleMapsModule,
    HttpClientModule,
    StoreModule.forRoot({}),
    StoreModule.forFeature('appStateFeature', appReducers),
    EffectsModule.forRoot([
      LocationEffects,
  ]),
    StoreDevtoolsModule.instrument({}),
  ],
  providers: [LocationSelectors,LocationActions],
  bootstrap: [AppComponent],
})
export class AppModule {}
