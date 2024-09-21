import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { BasicspageComponent } from './pages/basicspage/basicspage.component';
import { NumbresPageComponent } from './pages/numbres-page/numbres-page.component';
import { UncommonPageComponent } from './pages/uncommon-page/uncommon-page.component';
import { PrimeNGModule } from '../prime-ng/prime-ng.module';
import { OrderComponent } from './pages/order/order.component';

import { ToggleCasePipe } from './pipes/toogle-case.pipe';


@NgModule({
  declarations: [
    BasicspageComponent,
    NumbresPageComponent,
    UncommonPageComponent,
    OrderComponent,

    //pipes
    ToggleCasePipe
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    PrimeNGModule
  ]
})
export class ProductsModule { }
