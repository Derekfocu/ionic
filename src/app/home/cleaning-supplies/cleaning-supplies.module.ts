import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CleaningSuppliesPageRoutingModule } from './cleaning-supplies-routing.module';

import { CleaningSuppliesPage } from './cleaning-supplies.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CleaningSuppliesPageRoutingModule
  ],
  declarations: [CleaningSuppliesPage]
})
export class CleaningSuppliesPageModule {}
