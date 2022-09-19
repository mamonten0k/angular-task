import { AfterContentInit, Component, Input } from '@angular/core';

import { ITransaction } from '../../../store/data-access/data.typings';

import { dispatch } from '../../../store/data-access/data.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
})
export class TableComponent implements AfterContentInit {
  @Input() source: string;

  page: number = 1;

  transactions: Array<ITransaction>;

  ngAfterContentInit() {
    if (this.source) {
      this.transactions = dispatch(this.source);
    }
  }

  ngAfterViewChecked() {
    this.page = 1;
    console.log(this.page, this.source);
  }
}
