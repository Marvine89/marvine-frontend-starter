import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user/user.service';

@Component({
  selector: 'app-footer-buttons',
  templateUrl: './footer-buttons.component.html',
  styleUrls: ['./footer-buttons.component.scss']
})
export class FooterButtonsComponent {
  isAdmin = false;

  constructor(private router: Router, private userService: UserService) {
    this.isAdmin = this.userService.checkUserType;
  }

  logout(): void {
    this.router.navigate(['/login']);
  }

  shoppingCard(): void {
    this.router.navigate(['/shopping-card']);
  }
}
