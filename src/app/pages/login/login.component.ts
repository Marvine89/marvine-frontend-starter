import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserType } from 'src/app/shared/enums/enums';
import { User } from 'src/app/shared/models/user.model';
import { UserService } from 'src/app/shared/services/user/user.service';

interface IForm {
  selectedUserType: "ADMIN" | "CUSTOMER";
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  selectedUser = "";
  userType = UserType;
  users$!: Observable<User[]>;

  constructor(
    private userService: UserService,
    private router: Router) {
    this.userService.clearUserDetails();
  }

  ngOnInit(): void {
    this.users$ = this.userService.fetchUsers();
  }

  login({ selectedUserType }: IForm, users: User[]) {
    const selectedUser = users.find((user) => user.user.role === selectedUserType);

    if (selectedUser) {
      this.userService.saveUserDetails(selectedUser);
      this.router.navigate(["/"]);
    }
  }
}
