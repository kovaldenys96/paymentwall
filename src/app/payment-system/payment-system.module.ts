import { NgModule } from '@angular/core';
import { PaymentSystemComponent } from './payment-system.component';
import { CommonModule } from '@angular/common';
import { WidgetsModule } from '../widgets/widgets.module';
import { SuccessMessageComponent } from './sucess-message/success-message.component';
import { PaymentSystemRoutingModule } from './payment-system-routing.module';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  imports: [
    CommonModule,
    WidgetsModule,
    PaymentSystemRoutingModule,
    MatIconModule,
  ],
  declarations: [
    PaymentSystemComponent,
    SuccessMessageComponent,
  ],
})
export class PaymentSystemModule {
}
