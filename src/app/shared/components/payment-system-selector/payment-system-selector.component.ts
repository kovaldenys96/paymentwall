import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { PaymentSystem } from '../../../core/models/payment-system.model';

@Component({
  selector: 'pwl-payment-system-selector',
  templateUrl: './payment-system-selector.component.html',
  styleUrls: ['./payment-system-selector.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => PaymentSystemSelectorComponent),
    multi: true,
  }],
})
export class PaymentSystemSelectorComponent implements ControlValueAccessor {
  @Input() value: string;

  private _paymentSystems: PaymentSystem[];
  
  @Input() set paymentSystems(paymentSystems: PaymentSystem[]) {
    this._paymentSystems = paymentSystems;
    if (this.value && !paymentSystems.find(x => x.id === this.value)) {
      this.onChange('');
    }
  }

  get paymentSystems() {
    return this._paymentSystems;
  }

  onChange = (value: string): void => {};
  private onTouched = (): void => {};

  trackByFn(index: number, item: PaymentSystem) { return item.id; }

  writeValue(value: string) { this.value = value; }

  registerOnChange(fn: any) { this.onChange = fn; }

  registerOnTouched(fn: any) { this.onTouched = fn; }
}
