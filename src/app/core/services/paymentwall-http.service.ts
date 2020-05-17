import { Injectable } from '@angular/core';
import { BaseHttpService } from './base-http.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { PaymentSystem } from '../models/payment-system.model';
import { HttpResponse } from '@angular/common/http';

@Injectable()
export class PaymentwallHttpService extends BaseHttpService {
  getPaymentSystems(countryCode: string): Observable<PaymentSystem[]> {
    return this.makeRequest<{ country_code: string }, any[]>(this.apiConfig.paymentwall.getPaymentSystems, { country_code: countryCode })
      .pipe(
        map((res: HttpResponse<any[]>): PaymentSystem[] => (res.body || []).map(dto => PaymentSystem.dtoToModel(dto))),
      );
  }
}
