import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PosPageRoutingModule } from './pos-page-routing.module';
import { PosPageComponent } from '../pos-page/pos-page.component';

@NgModule({
  imports: [
    CommonModule,
    PosPageRoutingModule
  ],
  declarations: [PosPageComponent]
})
export class PosPageModule { }
