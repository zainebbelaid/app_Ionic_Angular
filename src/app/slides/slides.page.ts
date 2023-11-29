import { Component, OnInit } from '@angular/core';
import { register } from 'swiper/element';

register();
@Component({
  selector: 'app-slides',
  templateUrl: './slides.page.html',
  styleUrls:['./slides.page.scss'],
})
export class SlidesPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
