import { Component, OnInit } from '@angular/core';
import {Shop} from '../shopDTO/shop';
import {ShopService} from '../shopService/shop.service';
import {Router} from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-owner-sign-up',
  templateUrl: './owner-sign-up.component.html',
  styleUrls: ['./owner-sign-up.component.css']
})
export class OwnerSignUpComponent implements OnInit {

  imageURL: string;
  uploadForm: FormGroup;

  selectedShop: Shop = new Shop('', '', '', '', '');
  constructor(private shopService: ShopService, private router: Router, public fb: FormBuilder) {
    // Reactive Form
    this.uploadForm = this.fb.group({
      avatar: [null]
    });
  }

  ngOnInit() {
  }

  // Image Preview
  showPreview(event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.uploadForm.patchValue({
      avatar: file
    });
    this.uploadForm.get('avatar').updateValueAndValidity();

    // File Preview
    const reader = new FileReader();
    reader.onload = () => {
      this.imageURL = reader.result as string;
    };
    reader.readAsDataURL(file);
  }

  // registerShop() {
  //
  //   this.shopService.saveShop(this.selectedShop).subscribe(data => {
  //       if (data) {
  //         console.log(data);
  //         alert('Shop has been saved successful.');
  //         this.router.navigate(['ownerLogin ']);
  //       } else {
  //         alert('Faild...');
  //       }
  //
  //   });
  // }

  registerShop() {
   // const  formData: any = new FormData();
   // formData.append('shop', this.selectedShop);
    // formData.append('avatar', this.uploadForm.get('avatar').value);
    console.log(this.selectedShop.email);
    this.shopService.saveShop(this.selectedShop).subscribe(data => {
      if (data) {
        console.log(data);
        alert('shop has been addes...');
      } else {
        alert('faild');
      }
    });

  }

}
