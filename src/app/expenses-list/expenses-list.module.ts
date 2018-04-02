import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExpensesListRoutingModule } from './expenses-list-routing.module';
import { ExpensesListComponent } from './expenses-list.component';

@NgModule({
  imports: [
    CommonModule,
    ExpensesListRoutingModule
  ],
  declarations: [ExpensesListComponent]
})
export class ExpensesListModule { }
