import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CleaningSuppliesPage } from './cleaning-supplies.page';

const routes: Routes = [
  {
    path: '',
    component: CleaningSuppliesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CleaningSuppliesPageRoutingModule {}
