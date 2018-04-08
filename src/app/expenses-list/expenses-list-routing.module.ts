import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExpensesListComponent } from '@app/expenses-list/expenses-list.component';
import { extract, Route  } from '@app/core';
import { PosPageComponent } from '@app/pos-page/pos-page.component';

const routes: Routes = [
  Route.withShell([
    { path: 'expense', component: ExpensesListComponent, data: { title: extract('Expense') }} ,
    { path: 'pos', component: PosPageComponent, data: { title: extract('pos') } }

  ])
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExpensesListRoutingModule { }
