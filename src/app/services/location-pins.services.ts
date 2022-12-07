import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiResponse } from '../models/api.response.model';
import { locationPins } from '../models/locatinon-pins.model';

@Injectable({
  providedIn: 'root',
})
export class LocationPinsService {
  private baseUrl: string;
  private pinsGetAll: string;

  constructor(private _http: HttpClient) {
    this.createURLs();
  }
  createURLs() {
    this.baseUrl = 'http://localhost:5111/api/parkere/';
    this.pinsGetAll = `${this.baseUrl}${'location-pin/get-all'}`;
  }

  public getAllPins(): Observable<ApiResponse<locationPins[]>> {
    return this._http.get<ApiResponse<locationPins[]>>(this.pinsGetAll);
  }
}
