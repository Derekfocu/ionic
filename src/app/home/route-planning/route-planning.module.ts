import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RoutePlanningPageRoutingModule } from './route-planning-routing.module';

import { RoutePlanningPage } from './route-planning.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RoutePlanningPageRoutingModule
  ],
  declarations: [RoutePlanningPage]
})
export class RoutePlanningPageModule {}
