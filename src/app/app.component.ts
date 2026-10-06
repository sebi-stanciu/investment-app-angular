import { Component, signal } from '@angular/core';

import { HeaderComponent } from './header/header.component';
import { AppUserInputComponent } from './app-user-input/app-user-input.component';
import { InvestmentInput, InvestmentResult } from './investment-input.model';
import { InvestmentResultsComponent } from './investment-results/investment-results.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, AppUserInputComponent, InvestmentResultsComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {

}
