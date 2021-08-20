import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RoutePlanningPage } from './route-planning.page';

const routes: Routes = [
  {
    path: '',
    component: RoutePlanningPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RoutePlanningPageRoutingModule {}
