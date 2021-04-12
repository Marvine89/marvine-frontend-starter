import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {
  @Input() image = 'assets/images/banner-image.jpg';

  constructor() { }

  ngOnInit(): void { }
}
