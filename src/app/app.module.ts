import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ServiceWorkerModule } from '@angular/service-worker';
import { TranslateModule } from '@ngx-translate/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';

import { environment } from '@env/environment';
import { CoreModule } from '@app/core';
import { SharedModule } from '@app/shared';
import { HomeModule } from './home/home.module';
import { AboutModule } from './about/about.module';
import { LoginModule } from './login/login.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SalesModule } from './sales/sales.module';
import { ProductsModule } from '@app/products/products.module';
import { NgxDatatableModule } from "@swimlane/ngx-datatable";
import { ExpensesListModule } from './expenses-list/expenses-list.module';
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';
import { MatDialogModule } from '@angular/material';
import { CategoryFormModule } from './category-form/category-form.module'
import { ProductDialogModule } from './product-dialog/product-dialog.module';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { ProvidersModule } from './providers/providers.module';
import { CategoriesModule } from './categories/categories.module';
import { ProductFormService } from './product-dialog/productForm.service';
import { PosPageModule } from './pos-page/pos-page.module';
import { PosPageComponent } from './pos-page/pos-page.component';


import { ProductsListComponent } from './pos-page/products-list/products-list.component';
import { ProductsListModule } from './pos-page/products-list/products-list.module';
@NgModule({
  imports: [
    BrowserModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),
    FormsModule,
    HttpClientModule,
    NgxDatatableModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule.enablePersistence(), // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireStorageModule,
    TranslateModule.forRoot(),
    BrowserAnimationsModule,
    MaterialModule,
    CoreModule,
    SharedModule,
    HomeModule,
    AboutModule,
    LoginModule,
    SalesModule,
    ExpensesListModule,
    Ng4LoadingSpinnerModule.forRoot(),
    ProductsModule,
    CategoryFormModule,
    ProvidersModule,
    CategoriesModule,
    PosPageModule,
    ProductsListModule,
    AppRoutingModule
   

  ],
  exports: [
    NgxDatatableModule
  ],
  declarations: [AppComponent, PosPageComponent,ProductsListComponent],
  providers: [ProductFormService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
