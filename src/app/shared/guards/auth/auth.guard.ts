import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../../services/user/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private userService: UserService, private activeRoute: Router) { }

  canActivate(): boolean {
    const user = this.userService.getUserDetails;
    if (user) return true;

    this.activeRoute.navigate(["/login"]);
    return false;
  }

}
