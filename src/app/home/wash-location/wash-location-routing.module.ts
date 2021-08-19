import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WashLocationPage } from './wash-location.page';

const routes: Routes = [
  {
    path: '',
    component: WashLocationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WashLocationPageRoutingModule {}
