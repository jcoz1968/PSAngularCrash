import { IdentityService } from './../identity.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hm-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public loginService: IdentityService) { }

  ngOnInit() {
  }

  login() {
    this.loginService.loggedIn = true;
  }

  logout() {
    this.loginService.loggedIn = false;
  }

}
