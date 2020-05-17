import { Component, forwardRef, Input } from '@angular/core';
import { CountryList } from '../../../core/consts/countries.const';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Platform } from '@angular/cdk/platform';

@Component({
  selector: 'pwl-country-selector',
  templateUrl: './country-selector.component.html',
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => CountrySelectorComponent),
    multi: true,
  }],
})
export class CountrySelectorComponent implements ControlValueAccessor {
  @Input() value: string;
  readonly countries = CountryList;
  showNativeSelector: boolean;
  onChange = (value: string): void => {};

  constructor(private platform: Platform) {
    /** Not native selectors have a big problems with performance */
    this.showNativeSelector = platform.TRIDENT;
  }

  private onTouched = (): void => {};

  trackByFn(index: number, item: { code: string, name: string }) { return item.code; }

  writeValue(value: string) { this.value = value; }

  registerOnChange(fn: any) { this.onChange = fn; }

  registerOnTouched(fn: any) { this.onTouched = fn; }
}
