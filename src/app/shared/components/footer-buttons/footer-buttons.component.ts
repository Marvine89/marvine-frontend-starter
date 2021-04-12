import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer-buttons',
  templateUrl: './footer-buttons.component.html',
  styleUrls: ['./footer-buttons.component.scss']
})
export class FooterButtonsComponent {

  constructor(private router: Router) { }

  logout(): void {
    this.router.navigate(["/login"]);
  }

  shoppingCard(): void {
    this.router.navigate(["/shopping-card"]);
  }
}
