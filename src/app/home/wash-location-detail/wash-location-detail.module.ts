import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WashLocationDetailPageRoutingModule } from './wash-location-detail-routing.module';

import { WashLocationDetailPage } from './wash-location-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WashLocationDetailPageRoutingModule
  ],
  declarations: [WashLocationDetailPage]
})
export class WashLocationDetailPageModule {}
