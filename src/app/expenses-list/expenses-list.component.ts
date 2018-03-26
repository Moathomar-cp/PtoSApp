import { Component, OnInit } from '@angular/core';
import { ExpensesListItem } from '@app/expenses-list/expenses-list-item.class';
import { expensesListMock } from '@app/expenses-list/mock-expenses-list';

import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

@Component({
  selector: 'app-expenses-list',
  templateUrl: './expenses-list.component.html',
  styleUrls: ['./expenses-list.component.scss']
})
export class ExpensesListComponent implements OnInit {
  expensesList: ExpensesListItem[];
  numOpts: number[] = [10, 20, 30];
  numOptSelected: number;
  constructor(private spinnerService: Ng4LoadingSpinnerService) {

  }

  ngOnInit() {
    this.spinnerService.show();
    setTimeout(() => {
      /** spinner ends after 2 seconds */
      this.getData();
      this.spinnerService.hide();
    }, 2000);
  }
  getData() {
    this.expensesList = expensesListMock;
  }
  show() {}
}
