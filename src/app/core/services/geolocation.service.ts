import { Injectable } from '@angular/core';
import { iso1A2Code } from '@ideditor/country-coder/built/cjs/country-coder';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class GeolocationService {
  userCountryCode$ = new BehaviorSubject<string>(undefined);

  constructor() {
    navigator.geolocation.getCurrentPosition((position: Position) => {
      const countryCode = iso1A2Code([position.coords.longitude, position.coords.latitude]);
      if (countryCode) {
        this.userCountryCode$.next(countryCode);
      }
    }, err => console.error(err.message));
  }
}
