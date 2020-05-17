import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { PaymentSystemComponent } from './payment-system.component';
import { SuccessMessageComponent } from './sucess-message/success-message.component';

const routes: Routes = [
  { path: 'payment', component: PaymentSystemComponent },
  { path: 'success', component: SuccessMessageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaymentSystemRoutingModule {
}
