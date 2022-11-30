import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.page.html',
  styleUrls: ['./albums.page.scss'],
})
export class AlbumsPage implements OnInit {
  isModalOpen = false;

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }
  isModalOpen2 = false;

  setOpen2(isOpen: boolean) {
    this.isModalOpen2 = isOpen;
  }
  isModalOpen3 = false;

  setOpen3(isOpen: boolean) {
    this.isModalOpen3 = isOpen;
  }
  isModalOpen4 = false;

  setOpen4(isOpen: boolean) {
    this.isModalOpen4 = isOpen;
  }
  isModalOpen5 = false;

  setOpen5(isOpen: boolean) {
    this.isModalOpen5 = isOpen;
  }
  constructor() { }

  ngOnInit() {
  }

}
