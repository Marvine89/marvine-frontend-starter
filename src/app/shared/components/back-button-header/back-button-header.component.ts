import { Location } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-back-button-header',
  templateUrl: './back-button-header.component.html',
  styleUrls: ['./back-button-header.component.scss']
})
export class BackButtonHeaderComponent {

  constructor(private location: Location) { }

  goBack(): void {
    this.location.back();
  }
}
