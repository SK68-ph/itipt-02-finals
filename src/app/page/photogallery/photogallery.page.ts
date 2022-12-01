import { Component, OnInit } from '@angular/core';
import SwiperCore, { Autoplay,  Pagination, Zoom } from 'swiper';

SwiperCore.use([Autoplay, Pagination, Zoom]);

@Component({
  selector: 'app-photogallery',
  templateUrl: './photogallery.page.html',
  styleUrls: ['./photogallery.page.scss'],
})
export class PhotogalleryPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
