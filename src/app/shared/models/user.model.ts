import { IUser } from "../interfaces/user.interface";

export class User {
  user: IUser;

  constructor(user: IUser) {
    this.user = user;
  }

  get fullName(): string {
    return `${this.user.name.firstName} ${this.user.name.lastName}`;
  }
}