import { NgModule } from '@angular/core';
import { environment } from '../../environments/environment';
import { API_CONFIG, PAYMENTWALL_API_KEY, PAYMENTWALL_API_URL } from './injection-tokens';
import { PaymentwallHttpService } from './services/paymentwall-http.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { PaymentwallInterceptorService } from './services/paymentwall-interceptor.service';
import { GeolocationService } from './services/geolocation.service';

@NgModule({
  declarations: [],
  imports: [
    HttpClientModule,
  ],
  providers: [
    { provide: PAYMENTWALL_API_URL, useValue: environment.paymentwallApiUrl },
    { provide: PAYMENTWALL_API_KEY, useValue: environment.paymentwallApiKey },
    { provide: API_CONFIG, useValue: environment.apiConfig },
    PaymentwallHttpService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: PaymentwallInterceptorService,
      multi: true,
    },
    GeolocationService,
  ],
})
export class CoreModule {
}
