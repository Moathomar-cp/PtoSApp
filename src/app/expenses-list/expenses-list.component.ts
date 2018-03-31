import { Component, OnInit } from '@angular/core';
import { ExpensesListItem } from '@app/expenses-list/expenses-list-item.class';
import { expensesListMock } from '@app/expenses-list/mock-expenses-list';

import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import{ ExpenseFormComponent } from '@app/expense-form/expense-form.component';
import { MatDialog, MatDialogRef } from '@angular/material';



@Component({
  selector: 'app-expenses-list',
  templateUrl: './expenses-list.component.html',
  styleUrls: ['./expenses-list.component.scss']
})
export class ExpensesListComponent implements OnInit {

  fileNameDialogRef: MatDialogRef<ExpenseFormComponent>;

  openAddFileDialog() {
    this.fileNameDialogRef = this.dialog.open(ExpenseFormComponent, {
      height:'90%', width: '600px' ,
      });   
  }

  expensesList: ExpensesListItem[];
  numOpts: number[] = [10, 20, 30];
  numOptSelected: number;
  constructor(private spinnerService: Ng4LoadingSpinnerService , private dialog: MatDialog) {

  }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.spinnerService.show();
    setTimeout(() => {
      /** spinner ends after 2 seconds */
      this.expensesList = expensesListMock;
      this.spinnerService.hide();
    }, 2000);
  }

  show() { }
}
