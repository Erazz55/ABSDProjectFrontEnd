import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ShopService} from '../shopService/shop.service';


@Component({
  selector: 'app-shop-owner-dashdord',
  templateUrl: './shop-owner-dashdord.component.html',
  styleUrls: ['./shop-owner-dashdord.component.css']
})
export class ShopOwnerDashdordComponent implements OnInit {

  emailFromLogin: string;


  constructor(private router: Router, private route: ActivatedRoute, private shopService: ShopService ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.emailFromLogin = params.get('email');
      console.log(this.emailFromLogin);
    });


    // this.shopService.getShopDetail(this.emailFromLogin).subscribe(res => {
    //     console.log(res);
    //
    //   });

  }


  addSubmit() {
    this.router.navigate(['/addItem']);
  }
  viewSubmit() {
    this.router.navigate(['/viewItem']);
  }

  deleteSubmit() {
    this.router.navigate(['/deleteItem']);
  }


}
