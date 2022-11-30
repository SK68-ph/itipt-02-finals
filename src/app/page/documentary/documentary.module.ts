import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DocumentaryPageRoutingModule } from './documentary-routing.module';

import { DocumentaryPage } from './documentary.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DocumentaryPageRoutingModule
  ],
  declarations: [DocumentaryPage]
})
export class DocumentaryPageModule {}
