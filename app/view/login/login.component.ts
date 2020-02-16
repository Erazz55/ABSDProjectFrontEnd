import { Component, OnInit } from '@angular/core';
import {Login} from '../../models/login';
import {Router} from '@angular/router';
import {AuthenticationService} from '../../service/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  selectedUser: Login = new Login('', '');
  invalidLogin = false;


  constructor(private router: Router, private authenticationService: AuthenticationService) { }

  ngOnInit() {
  }

  // login() {
  //   this.authenticationService.authentication(this.selectedUser).pipe(map(userData => {
  //       console.log(userData);
  //       sessionStorage.setItem('username', this.selectedUser.username);
  //       const tokenStr = 'Bearer' + userData;
  //       sessionStorage.setItem('token', tokenStr);
  //       this.router.navigate(['homepage']);
  //       return userData;
  //
  //   }));
  //
  // }

  login(): void {
    this.authenticationService.authentication(this.selectedUser).subscribe(resp => {
       if (resp === 400) {
         alert('Invalid Login...');
       }
       console.log(resp);
       sessionStorage.setItem('username', this.selectedUser.username);
       const tokenStr = 'Bearer' + resp;
       sessionStorage.setItem('token', tokenStr);
       this.router.navigate(['homepage']);
    });
  }
}
