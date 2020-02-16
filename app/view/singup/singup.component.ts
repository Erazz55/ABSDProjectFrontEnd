import { Component, OnInit, ViewChild} from '@angular/core';
import {User} from '../../models/user';
import {AuthenticationService} from '../../service/authentication.service';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.css']
})
export class SingupComponent implements OnInit {

  selectedUser: User = new User('', '',  '');
  // @ViewChild('frmUser') frmUser: NgForm;

  constructor(private authenticationService: AuthenticationService, private router: Router) { }

  ngOnInit() {
  }

  registration(): void {
    this.authenticationService.registerUser(this.selectedUser).subscribe(Success => {
      if (Success === 'Success') {
        this.router.navigate(['login']);
      } else {
        alert('Registration Faild');
      }
    });

  }

}
