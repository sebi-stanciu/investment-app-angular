import { Component, output, signal } from '@angular/core';

import { FormsModule } from '@angular/forms';
import type { InvestmentInput } from '../investment-input.model';

@Component({
  selector: 'app-app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './app-user-input.component.html',
  styleUrl: './app-user-input.component.css',
})
export class AppUserInputComponent {
  calculate = output<InvestmentInput>();
  enteredInitialInvestment = signal('0');
  enteredAnnualInvestment = signal('');
  enteredExpectedReturn = signal('5');
  enteredDuration = signal('10');

  onSubmit() {
    this.calculate.emit({
      initialInvestment: Number(this.enteredInitialInvestment()),
      annualInvestment: Number(this.enteredAnnualInvestment()),
      expectedReturn: Number(this.enteredExpectedReturn()),
      duration: Number(this.enteredDuration()),
    });
  }
}
