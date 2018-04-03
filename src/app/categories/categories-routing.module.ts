import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Route, extract } from '@app/core';
import{ CategoriesComponent } from '@app/categories/categories.component'

const routes: Routes = [  
  Route.withShell([
    { path: '', redirectTo: '/categories', pathMatch: 'full' },
    { path: 'categories', component: CategoriesComponent, data: { title: extract('categories') } }
  ])
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriesRoutingModule { 
   
}
