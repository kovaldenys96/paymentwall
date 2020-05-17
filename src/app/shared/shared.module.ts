import { NgModule } from '@angular/core';
import { CountrySelectorComponent } from './components/country-selector/country-selector.component';
import { MatSelectModule } from '@angular/material/select';
import { CommonModule } from '@angular/common';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { PaymentSystemSelectorComponent } from './components/payment-system-selector/payment-system-selector.component';
import { MatButtonToggleModule } from '@angular/material/button-toggle';

@NgModule({
  imports: [
    CommonModule,
    MatSelectModule,
    MatIconModule,
    HttpClientModule,
    FormsModule,
    MatButtonToggleModule,
  ],
  declarations: [
    CountrySelectorComponent,
    PaymentSystemSelectorComponent,
  ],
  exports: [
    CountrySelectorComponent,
    PaymentSystemSelectorComponent,
  ],
})
export class SharedModule {
  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIconSetInNamespace(
      'sprite',
      sanitizer.bypassSecurityTrustResourceUrl('assets/svg/flags-sprite.svg'),
    );
  }
}
