import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WashProductsPageRoutingModule } from './wash-products-routing.module';

import { WashProductsPage } from './wash-products.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WashProductsPageRoutingModule
  ],
  declarations: [WashProductsPage]
})
export class WashProductsPageModule {}
