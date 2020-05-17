import { AbstractControl } from '@angular/forms';
import * as luhn from 'fast-luhn';

export function ageRangeValidator(control: AbstractControl): { [key: string]: boolean } | null {
  if (control.value.match(/\d{16}/) && luhn(control.value)) {
    return { luhn: true };
  }
  return null;
}
