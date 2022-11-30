import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DocumentaryPage } from './documentary.page';

const routes: Routes = [
  {
    path: '',
    component: DocumentaryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DocumentaryPageRoutingModule {}
