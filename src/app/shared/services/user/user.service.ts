import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StorageTypes } from '../../enums/enums';
import { HttpService } from '../http/http.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private httpService: HttpService) { }

  fetchUsers(): Observable<any> {
    return this.httpService.get("/users");
  }

  fetchUser(user_id: number): Observable<any> {
    return this.httpService.get(`/users/${user_id}`);
  }

  saveUserDetails(user: any): void {
    if (!user) return;
    localStorage.setItem(StorageTypes.USER_DETAILS, JSON.stringify(user));
  }

  get getUserDetails(): any {
    const user = localStorage.getItem(StorageTypes.USER_DETAILS);
    return user ? JSON.parse(user) : null;
  }
}
