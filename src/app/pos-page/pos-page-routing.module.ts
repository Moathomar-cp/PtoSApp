import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { Route, extract } from '@app/core';
import {PosPageComponent} from './pos-page.component';

const routes: Routes = [
  Route.withShell([
    { path: 'pos', component: PosPageComponent, data: { title: extract('POS') } }
  ])
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PosPageRoutingModule { }
