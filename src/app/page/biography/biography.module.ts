import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BiographyPageRoutingModule } from './biography-routing.module';

import { BiographyPage } from './biography.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BiographyPageRoutingModule
  ],
  declarations: [BiographyPage]
})
export class BiographyPageModule {}
