import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { StorageTypes, UserType } from '../../enums/enums';
import { IUser } from '../../interfaces/user.interface';
import { User } from '../../models/user.model';
import { HttpService } from '../http/http.service';
import { ErrorService } from '../error/error.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private httpService: HttpService, private errorService: ErrorService) { }

  fetchUsers(): Observable<User[]> {
    return this.httpService.get<IUser[]>("/users").pipe(
      map((users) => users.map((user) => new User(user))),
      catchError(() => this.errorService.showError())
    );
  }

  fetchUser(user_id: number): Observable<any> {
    return this.httpService.get(`/users/${user_id}`).pipe(
      catchError(() => this.errorService.showError())
    );
  }

  saveUserDetails(user: User): void {
    if (!user) return;
    localStorage.setItem(StorageTypes.USER_DETAILS, JSON.stringify(user));
  }

  get getUserDetails(): User | null {
    const user = localStorage.getItem(StorageTypes.USER_DETAILS);
    return user ? JSON.parse(user) : null;
  }

  get checkUserType(): boolean {
    const user = this.getUserDetails;
    return user ? user.user.role === UserType.ADMIN : false;
  }

  clearUserDetails(): void {
    localStorage.removeItem(StorageTypes.USER_DETAILS);
  }
}
