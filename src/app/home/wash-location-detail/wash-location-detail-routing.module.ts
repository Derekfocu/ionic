import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WashLocationDetailPage } from './wash-location-detail.page';

const routes: Routes = [
  {
    path: '',
    component: WashLocationDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WashLocationDetailPageRoutingModule {}
