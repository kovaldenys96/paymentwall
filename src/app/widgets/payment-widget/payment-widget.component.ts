import { Component, EventEmitter, Input, OnDestroy, Output } from '@angular/core';
import { PaymentInfo } from '../../core/models/payment-info.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import { PaymentSystem } from '../../core/models/payment-system.model';
import { PaymentwallHttpService } from '../../core/services/paymentwall-http.service';
import { GeolocationService } from '../../core/services/geolocation.service';
import { ageRangeValidator } from '../../core/utils/validations/luhn-validator';
import { ReactiveFormValue } from '../../core/models/reactive-form-value.model';
import { CardInfo } from '../../core/models/card-info.model';
import { filter, switchMap, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'pwl-payment-widget',
  templateUrl: './payment-widget.component.html',
  styleUrls: ['./payment-widget.component.scss'],
})
export class PaymentWidgetComponent implements OnDestroy {
  @Input() amount: number;
  @Input() currency: string;
  @Output() payClick = new EventEmitter<PaymentInfo>();
  form: FormGroup;
  cardInfoForm: FormGroup;
  destroy$: Subject<void>;
  paymentSystems$: Observable<PaymentSystem[]>;

  constructor(
    fb: FormBuilder,
    paymentwallHttpService: PaymentwallHttpService,
    geolocationService: GeolocationService,
  ) {
    this.cardInfoForm = fb.group({
      /** Names can contain umlauts, special characters "'" and "-" etc. */
      cardHolder: ['', [Validators.required, Validators.pattern(/^.{3,40}$/)]],
      cardNumber: ['', [Validators.required, ageRangeValidator]],
      expirationMonth: ['', [Validators.required, Validators.pattern(/(^0?[1-9]$)|(^1[0-2]$)/)]],
      expirationYear: ['', [Validators.required, Validators.min(new Date().getFullYear() - 2000)]],
      cvv: ['', [Validators.required]],
    } as ReactiveFormValue<CardInfo>);

    this.form = fb.group({
      countryCode: ['', [Validators.required]],
      paymentSystem: ['', [Validators.required]],
      cardInfo: this.cardInfoForm,
    } as ReactiveFormValue<PaymentInfo>);

    this.destroy$ = new Subject<void>();

    this.paymentSystems$ = this.form.get('countryCode').valueChanges
      .pipe(
        switchMap(countryCode => paymentwallHttpService.getPaymentSystems(countryCode)),
      );

    geolocationService.userCountryCode$
      .pipe(
        filter(countryCode => !!countryCode),
        takeUntil(this.destroy$),
      )
      .subscribe((countryCode) => {
        this.form.get('countryCode').setValue(countryCode.toLowerCase());
      });
  }

  onSubmitClick() {
    this.payClick.emit(this.form.value as PaymentInfo);
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
