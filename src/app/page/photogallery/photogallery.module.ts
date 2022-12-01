import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PhotogalleryPageRoutingModule } from './photogallery-routing.module';

import { PhotogalleryPage } from './photogallery.page';

import { SwiperModule } from 'swiper/angular';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PhotogalleryPageRoutingModule,
    SwiperModule
  ],
  declarations: [PhotogalleryPage]
})
export class PhotogalleryPageModule {}
