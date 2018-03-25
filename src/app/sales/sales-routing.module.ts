import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Route, extract } from '@app/core';
import { SalesComponent } from './sales.component';

const routes: Routes = [
  Route.withShell([
    { path: '', redirectTo: '/sales', pathMatch: 'full' },
    { path: 'sales', component: SalesComponent, data: { title: extract('Sales') } }
  ])
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule ],
  providers: []
})
export class SalesRoutingModule {
    
 }
