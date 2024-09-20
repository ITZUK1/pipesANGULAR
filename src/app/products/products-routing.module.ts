import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BasicspageComponent } from './pages/basicspage/basicspage.component';
import { NumbresPageComponent } from './pages/numbres-page/numbres-page.component';
import { UncommonPageComponent } from './pages/uncommon-page/uncommon-page.component';

const routes: Routes = [
  {
    path: '',
    component: BasicspageComponent
  },
  {
    path: 'numbers',
    component: NumbresPageComponent
  },
  {
    path: 'uncommon',
    component: UncommonPageComponent
  },
  {
    path: '**',
    redirectTo:''
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
