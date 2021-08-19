import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WashLocationPageRoutingModule } from './wash-location-routing.module';

import { WashLocationPage } from './wash-location.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WashLocationPageRoutingModule
  ],
  declarations: [WashLocationPage]
})
export class WashLocationPageModule {}
