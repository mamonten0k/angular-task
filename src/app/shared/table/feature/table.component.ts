import {
  AfterContentInit,
  AfterViewChecked,
  Component,
  Input,
} from '@angular/core';

import { ITransaction } from '../../../store/data-access/data.typings';

import { dispatchTable } from '../../../store/data-access/data.service';

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
      this.transactions = dispatchTable(this.source);
    }
  }
}
