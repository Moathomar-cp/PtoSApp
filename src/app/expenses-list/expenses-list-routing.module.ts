import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExpensesListComponent } from '@app/expenses-list/expenses-list.component';
import { extract, Route  } from '@app/core';

const routes: Routes = [
  Route.withShell([
    { path: 'expense', component: ExpensesListComponent, data: { title: extract('Expense') } }
  ])
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExpensesListRoutingModule { }
