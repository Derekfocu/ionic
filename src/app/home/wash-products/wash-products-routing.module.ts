import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WashProductsPage } from './wash-products.page';

const routes: Routes = [
  {
    path: '',
    component: WashProductsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WashProductsPageRoutingModule {}
