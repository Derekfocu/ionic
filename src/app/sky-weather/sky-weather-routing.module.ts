import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SkyWeatherPage } from './sky-weather.page';

const routes: Routes = [
  {
    path: '',
    component: SkyWeatherPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SkyWeatherPageRoutingModule {}
