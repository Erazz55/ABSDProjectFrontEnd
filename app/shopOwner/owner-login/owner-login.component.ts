import {Component, NgZone, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ShopLoginDTO} from '../shopDTO/shop-login-dto';
import {ShopService} from '../shopService/shop.service';
import {Router} from '@angular/router';
import {ShopResponse} from '../shopDTO/shop-response';


@Component({
  selector: 'app-owner-login',
  templateUrl: './owner-login.component.html',
  styleUrls: ['./owner-login.component.css']
})
export class OwnerLoginComponent implements OnInit {

  loginForm: FormGroup;
  submitted = false;
  shopData: ShopResponse;
  selectedShop: ShopLoginDTO ;

  constructor(private formBuilder: FormBuilder, private ngZone: NgZone, private shopService: ShopService, private router: Router) { }

ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

get f() { return this.loginForm.controls; }


  loginFormSubmit(): void {
    // stop here if form is invalid
    this.submitted = true;
    this.selectedShop = new ShopLoginDTO(this.loginForm.value.email, this.loginForm.value.password);
    if (this.loginForm.invalid) {
      return;
    }

    this.shopService.authentication(this.selectedShop).subscribe(resp => {
      this.shopData = resp;
      if (resp === null) {
        alert('Invalid Credentials..');
        return;
      } else {
        console.log(resp);
        sessionStorage.setItem('email', this.selectedShop.email);
        const tokenStr = 'Bearer' + this.shopData.jwtToken;
        sessionStorage.setItem('token', tokenStr);
        this.router.navigate(['/shopOwnerDashbord/', this.shopData.email]);
      }
    });

  }
}
