import { Component, AfterContentInit } from '@angular/core';

import { dispatchStatistics } from 'src/app/store/data-access/data.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
})
export class SummaryPageComponent implements AfterContentInit {
  incomeAmt: string;
  outcomeAmt: string;
  investmentsAmt: string;
  loansAmt: string;
  total: string;

  ngAfterContentInit() {
    this.incomeAmt = dispatchStatistics('income');
    this.outcomeAmt = dispatchStatistics('outcome');
    this.investmentsAmt = dispatchStatistics('investments');
    this.loansAmt = dispatchStatistics('loans');
    this.total = dispatchStatistics('total');
  }
}
