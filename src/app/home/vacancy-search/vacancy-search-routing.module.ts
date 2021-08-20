import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VacancySearchPage } from './vacancy-search.page';

const routes: Routes = [
  {
    path: '',
    component: VacancySearchPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VacancySearchPageRoutingModule {}
