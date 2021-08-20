import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SkyWeatherPageRoutingModule } from './sky-weather-routing.module';

import { SkyWeatherPage } from './sky-weather.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SkyWeatherPageRoutingModule
  ],
  declarations: [SkyWeatherPage]
})
export class SkyWeatherPageModule {}
