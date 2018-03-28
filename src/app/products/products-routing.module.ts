import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Route, extract } from '@app/core';
import { ProductsComponent } from './products.component';

const routes: Routes = [

  Route.withShell([
    { path: 'products', component: ProductsComponent, data: { title: extract('Product') } }
  ])
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
