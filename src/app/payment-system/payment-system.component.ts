import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PaymentInfo } from '../core/models/payment-info.model';

@Component({
  selector: 'pwl-payment-system',
  templateUrl: 'payment-system.component.html',
  styleUrls: ['payment-system.component.scss'],
})
export class PaymentSystemComponent {

  constructor(private router: Router) {}

  onPayClick(paymentInfo: PaymentInfo) {
    console.log(paymentInfo);
    this.router.navigate(['/success']);
  }
}
