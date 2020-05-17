import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentWidgetComponent } from './payment-widget/payment-widget.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { NgxMaskModule } from 'ngx-mask';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    NgxMaskModule.forRoot(),
  ],
  declarations: [
    PaymentWidgetComponent,
  ],
  exports: [
    PaymentWidgetComponent,
  ],
})
export class WidgetsModule {
}
