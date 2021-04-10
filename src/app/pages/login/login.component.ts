import { Component } from '@angular/core';
import { UserType } from 'src/app/shared/enums/enums';

interface IForm {
  selectedUser: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  selectedUser = "";
  userType = UserType;

  constructor() { }

  login({ selectedUser }: IForm) {
    console.log(selectedUser);
  }
}
