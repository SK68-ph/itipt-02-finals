import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BiographyPage } from './biography.page';

const routes: Routes = [
  {
    path: '',
    component: BiographyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BiographyPageRoutingModule {}
