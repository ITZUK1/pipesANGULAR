import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { BasicspageComponent } from './pages/basicspage/basicspage.component';
import { NumbresPageComponent } from './pages/numbres-page/numbres-page.component';
import { UncommonPageComponent } from './pages/uncommon-page/uncommon-page.component';
import { PrimeNGModule } from '../prime-ng/prime-ng.module';


@NgModule({
  declarations: [
    BasicspageComponent,
    NumbresPageComponent,
    UncommonPageComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    PrimeNGModule
  ]
})
export class ProductsModule { }
