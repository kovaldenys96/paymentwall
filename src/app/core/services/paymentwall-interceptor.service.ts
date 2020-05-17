import { Inject, Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PAYMENTWALL_API_KEY, PAYMENTWALL_API_URL } from '../injection-tokens';

@Injectable()
export class PaymentwallInterceptorService implements HttpInterceptor {
  constructor(
    @Inject(PAYMENTWALL_API_URL) private apiUrl: string,
    @Inject(PAYMENTWALL_API_KEY) private apiKey: string,
  ) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (req.url.startsWith(this.apiUrl)) {
      let newReq = req;
      if (req.method === 'GET') {
        newReq = req.clone({ setParams: { key: this.apiKey } });
      }
      return next.handle(newReq);
    }

    return next.handle(req);
  }
}
