import { FormGroup } from '@angular/forms';

export type ReactiveFormValue<T> = Required<{ [key in keyof T]: T[key] | [T[key], any] | FormGroup }>;
