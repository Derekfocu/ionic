import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VacancySearchPageRoutingModule } from './vacancy-search-routing.module';

import { VacancySearchPage } from './vacancy-search.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VacancySearchPageRoutingModule
  ],
  declarations: [VacancySearchPage]
})
export class VacancySearchPageModule {}
