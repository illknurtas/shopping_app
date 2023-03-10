import { Injectable } from '@angular/core';
import { User } from '../login/user';

@Injectable()
export class AccountService {

  constructor() { }

  loggedIn = false;

  login(user:User):boolean{
    if(user.userName =="ilknur" && user.password=="123456"){
      return true;
      this.loggedIn = true;
      localStorage.setItem("isLogged", user.userName);
    }
    return false;
  }
  isLoggedIn (){
    return this.isLoggedIn;
  }
  logOut(){
    localStorage.removeItem("isLogged");
    this.loggedIn = false;
  }
}
