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

  //investmentResults?: InvestmentResult[];

  investmentResults = signal<InvestmentResult[] | undefined>(undefined);

  calculateInvestmentResults(data: InvestmentInput) {
    const { initialInvestment, duration, expectedReturn, annualInvestment } =
      data;

    const annualData = [];
    let investmentValue = initialInvestment;

    for (let i = 0; i < duration; i++) {
      const year = i + 1;
      const interestEarnedInYear = investmentValue * (expectedReturn / 100);
      investmentValue += interestEarnedInYear + annualInvestment;
      const totalInterest =
        investmentValue - annualInvestment * year - initialInvestment;
      annualData.push({
        year: year,
        interest: interestEarnedInYear,
        valueEndOfYear: investmentValue,
        annualInvestment: annualInvestment,
        totalInterest: totalInterest,
        totalAmountInvested: initialInvestment + annualInvestment * year,
      });
    }

    // investmentResults = annualData;
    this.investmentResults.set(annualData);
  }
}
